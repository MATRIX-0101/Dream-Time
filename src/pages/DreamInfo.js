import React from 'react'

export default function DreamInfo() {
  return (
      <div className="container mx-auto px-4 py-8 bg-slate-300">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Dreams: The Mystery of Our Minds</h1>
          <p className="text-lg">Dreams are stories and images that our minds create while we sleep. Dreaming may have some benefits, such as helping the brain process information gathered during the day.</p>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fast Facts on Dreams</h2>
          <ul className="list-disc list-inside">
            <li>We may not remember dreaming, but everyone is thought to dream between 3 and 6 times per night.</li>
            <li>It is thought that each dream lasts between 5 to 20 minutes.</li>
            <li>Around 95 percent of dreams are forgotten by the time a person gets out of bed.</li>
            <li>Dreaming can help you learn and develop long-term memories.</li>
            <li>Blind people dream more with other sensory components compared with sighted people.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Causes</h2>
          <p>There are several theories about why we dream. Are dreams merely part of the sleep cycle, or do they serve some other purpose?</p>
          <ul className="list-disc list-inside mt-4">
            <li>Representing unconscious desires and wishes</li>
            <li>Interpreting random signals from the brain and body during sleep</li>
            <li>Consolidating and processing information gathered during the day</li>
            <li>Working as a form of psychotherapy</li>
          </ul>
          <p className="mt-4">From evidence and new research methodologies, researchers have speculated that dreaming serves the following functions:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Offline memory reprocessing</li>
            <li>Preparing for possible future threats</li>
            <li>Cognitive simulation of real-life experiences</li>
            <li>Helping develop cognitive capabilities</li>
            <li>Reflecting unconscious mental function in a psychoanalytic way</li>
            <li>A unique state of consciousness</li>
            <li>A psychological space for balancing complex notions</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Phases of Sleep</h2>
          <p>Dreams most likely happen during REM sleep. There are five phases of sleep in a sleep cycle:</p>
          <ul className="list-decimal list-inside mt-4">
            <li>Stage 1: Light sleep, slow eye movement, and reduced muscle activity. (4-5% of total sleep)</li>
            <li>Stage 2: Eye movement stops and brain waves become slower, with occasional bursts of rapid waves called sleep spindles. (45-55% of total sleep)</li>
            <li>Stage 3: Extremely slow brain waves called delta waves begin to appear, interspersed with smaller, faster waves. (4-6% of total sleep)</li>
            <li>Stage 4: The brain produces delta waves almost exclusively. Difficult to wake someone during stages 3 and 4. (12-15% of total sleep)</li>
            <li>Stage 5: REM sleep. Breathing becomes more rapid, irregular, and shallow. (20-25% of total sleep)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nightmares</h2>
          <p>Nightmares are distressing dreams that cause the dreamer to feel a number of disturbing emotions. Common reactions include fear and anxiety. They can occur in both adults and children, and causes include:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Stress</li>
            <li>Fear</li>
            <li>Trauma</li>
            <li>Emotional difficulties</li>
            <li>Illness</li>
            <li>Use of certain medications or drugs</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Lucid Dreams</h2>
          <p>Lucid dreaming is when the dreamer is aware that they are dreaming. They may have some control over their dream. This measure of control can vary between lucid dreams. They often occur in the middle of a regular dream when the sleeping person realizes suddenly that they are dreaming.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interpretations</h2>
          <p>What goes through our minds just before we fall asleep could affect the content of our dreams. For example, during exam time, students may dream about course content. People in a relationship may dream of their partner. Web developers may see programming code. These observations suggest that elements from the everyday re-emerge in dream-like imagery during the transition from wakefulness to sleep.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Characters in Dreams</h2>
          <p>Studies have examined the “characters” that appear in dream reports and how the dreamer identifies them.</p>
          <ul className="list-disc list-inside mt-4">
            <li>Forty-eight percent of characters represented a named person known to the dreamer.</li>
            <li>Thirty-five percent of characters were identified by their social role or relationship to dreamer.</li>
            <li>Sixteen percent were not recognized.</li>
          </ul>
          <p className="mt-4">Among named characters:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Thirty-two percent were identified by appearance.</li>
            <li>Twenty-one percent were identified by behavior.</li>
            <li>Forty-five percent were identified by face.</li>
            <li>Forty-four percent were identified by “just knowing.”</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Memories and Dreams</h2>
          <p>The concept of ‘repression’ dates back to Freud. Freud maintained that undesirable memories could become suppressed in the mind. Dreams ease repression by allowing these memories to be reinstated.</p>
          <p className="mt-4">A study showed that sleep does not help people forget unwanted memories. Instead, REM sleep might even counteract the voluntary suppression of memories, making them more accessible for retrieval.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dream Lag</h2>
          <p>Dream-lag is when the images, experiences, or people that emerge in dreams are images, experiences, or people you have seen recently, perhaps the previous day or a week before.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Themes in Dreams</h2>
          <p>The themes of dreams can be linked to the suppression of unwanted thoughts and, as a result, an increased occurrence of that suppressed thought in dreams.</p>
          <p className="mt-4">Some common themes are:</p>
          <ul className="list-disc list-inside mt-4">
            <li>School, teachers, and studying</li>
            <li>Being chased or pursued</li>
            <li>Sexual experiences</li>
            <li>Falling</li>
            <li>Arriving too late</li>
            {/* Add other themes as needed */}
          </ul>
        </section>
      </div>
    );
}

