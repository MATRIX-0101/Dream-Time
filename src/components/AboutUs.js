
import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Dreams</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dreams are stories and images that our minds create while we sleep. Dreaming may have some benefits, such as helping the brain process information gathered during the day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            They are an enduring source of mystery for scientists and psychological doctors. Why do dreams occur? What causes them? Can we control them? What do they mean?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            There are several theories about why we dream. Are dreams merely part of the sleep cycle, or do they serve some other purpose?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Possible explanations include:
            <ul className="list-disc ml-8">
              <li>Representing unconscious desires and wishes</li>
              <li>Interpreting random signals from the brain and body during sleep</li>
              <li>Consolidating and processing information gathered during the day</li>
              <li>Working as a form of psychotherapy</li>
            </ul>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            From evidence and new research methodologies, researchers have speculated that dreaming serves various functions, including:
            <ul className="list-disc ml-8">
              <li>Offline memory reprocessing</li>
              <li>Preparing for possible future threats</li>
              <li>Cognitive simulation of real-life experiences</li>
              <li>Helping develop cognitive capabilities</li>
              <li>Reflecting unconscious mental function</li>
              <li>Serving as a unique state of consciousness</li>
            </ul>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Dreams most likely happen during REM sleep, which is the fifth stage of sleep in a sleep cycle.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Neuroscientific explanations link dreaming to the rapid eye movement (REM) phase of sleep.
          </p>
        </div>
      </div>
    </div>
  );
}
