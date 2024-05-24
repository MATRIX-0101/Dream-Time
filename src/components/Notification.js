// import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
export default function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore(app);
      const userRef = collection(db, 'user');
      try {
        const userSnapshot = await getDocs(userRef);
        const userdocs = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserData(userdocs); // Update the userData state with the user documents
        console.log('User Data:', userdocs); // Log for verification
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchNotificationData = async () => {
      const tempId = auth.currentUser.uid;
      setUserId(tempId);
      const db = getFirestore(app);
      const notificationsCollectionRef = collection(db, 'Notifications');
      try {
        const snapshot = await getDocs(notificationsCollectionRef);
        const notificationData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotificationData(notificationData);
        console.log('Notification Data:', notificationData); // Log for verification
      } catch (error) {
        console.error("Error fetching notifications:", error);
        alert("An error occurred while fetching notifications.");
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData();
        fetchNotificationData();
      } else {
        alert("Please log in again");
      }
    });
    return () => unsubscribe();
  }, []);

  const filteredNotifications = notificationData !== null 
    ? notificationData.filter(notification => (notification.to === userId || notification.to === "") && notification.from !== userId) 
    : [];

  console.log('Filtered Notifications:', filteredNotifications);

  const getUserById = (id) => userData.find(user => user.id === id);

  return (
    <div className="font-sans flex flex-wrap justify-center">
      {filteredNotifications && 
      filteredNotifications.map((notification, index) => {
        const user = getUserById(notification.from);
        return (
          <div 
            key={index} 
            className="bg-white w-full md:w-2/3 lg:w-2/3 xl:w-2/3 my-8 mx-4 rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* {user && (
              <div className="absolute top-2 left-2">
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  // onClick={() => handleImageClick(user.image)}
                />
              </div>
            )} */}
            <div className="p-4">
              {notification.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
