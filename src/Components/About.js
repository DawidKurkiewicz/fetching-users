import React from 'react';
import '../css/About.css';

const About = () => (
    <div className='container'>
        <div className="title">
            <h1>Jak działamy</h1>
        </div>
        <div className="item-container">
            <div className="text-container">
                <h2> Zorientowanie na cel</h2>
                <p>Jesteśmy zespołem nakierowanym na cel. W pierwszej kolejności wspólnie z
                    Państwem przeprowadzamy analizę wymagań biznesowych oraz rynku.
                    Dobór narzędzi technologicznych oraz kompetencji potrzebnych przy
                    wdrożeniu opieramy na wynikach analiz.
                    Najważniejsze dla nas jest spełnienie Państwa celów biznesowych.</p>
            </div>
        </div>
        <div className="item-container">
            <div className="text-container">
                <h2> Jakość</h2>
                <p>W naszej pracy przywiązujemy ogromną wagę do jakości.
                    Przede wszystkim kierujemy się najlepszymi praktykami i wysokimi standardami,
                    które pozwalają nam zrozumieć problem oraz
                    stworzyć najlepsze narzędzie do jego rozwiązania.</p>
            </div>
        </div>
        <div className="item-container">
            <div className="text-container">
                <h2> Opieka, wsparcie, serwis</h2>
                <p>Działamy kompleksowo, posiadamy szeroki zakres kompetencji dzięki czemu, zapewniamy
                    Państwu komfort oraz bezpieczeństwo. Pomagamy na wszystkich
                    etapach projektu począwszy od określenia wymagań, aż do
                    ostatecznego wdrożenia, wsparcia i opieki po wdrożeniu</p>
            </div>
        </div>
    </div>
);

export default About