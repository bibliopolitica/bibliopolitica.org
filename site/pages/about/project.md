---
title: "About the Project"
description: "TBD"
layout: page
team:
  - name: Amanda Belantara
    image: '/media/team/amanda.jpg'
    blurb: "Co-curator, project coordinator. Assistant Curator at New York University Libraries"
  - name: Lillian Castillo-Speed
    image: '/media/team/lily.png'
    blurb: "Co-curator, former Chicano Studies Library Coordinator, now Head Librarian of the Ethnic Studies Library at UC Berkeley"
  - name: Richard Chabrán
    image: '/media/team/richard.jpg'
    blurb: "Co-curator, former Chicano Studies Library Coordinator, Team Leader Latino Digital Archive Group"
  - name: Matthew Haugen
    image: '/media/team/matthew.jpg'
    blurb: "Project metadata coordinator. Rare Book Cataloger at Columbia University Libraries"
  - name: Inaiah Lujan
    image: '/media/team/inaiah.jpg'
    url: https://www.inaiahlujan.com/
    blurb: "Graphic design, brand development, creative advisor. CEO at TruLu Productions"
  - name: Ed Madrid
    url: https://edmadrid.com/
    blurb: Web UI/UX designer
  - name: Marii Nyrop
    url: https://marii.info
    blurb: "Web UI & API developer and collection data wrangler. Senior Research Data Engineer at New York University"
permalink: "/about/project.html"
contents:
  - label: Project Team
    anchor: '#project-team'
  - label: Additional Credits
    anchor: '#additional-credits'
  - label: Gratitude
    anchor: '#gratitude'
  - label: Contributor Notes
    anchor: '#contributor-notes'
  - label: Contact
    anchor: '#contact'
images:
  - url: '/media/013.jpg'
    caption: "Purita Mesa, Richard Chabran, Lillian Castillo-Speed. Outside Ethnic Studies Library, October 1, 2023"
  - url: '/media/017.jpg'
    caption: "Richard Chabran, Chela Rios Munoz, Carlos Munoz, Lillian Castillo-Speed. UC Berkeley, October 1, 2023" 
  - url: '/media/023.jpg'
    caption: "Richard Chabran, Lillian Castillo-Speed, Clementina Duron. Changemaker Studio, UC Berkeley, October 1, 2023."
  - url: '/media/028.jpg'
    caption: "Lucha Corpi. Changemaker Studio, UC Berkeley, October 1, 2023."
additional_credits:
  - header: English-Spanish translation
    value: Kathy Blackmer Reyes, Angie Chabrám, Rafael Chabrán, Julia Curry, Richard Chabrán, and Lillian Castillo-Speed
  - header: Archives assistance
    value: Gema Paola Morales-Mendoza and August Eli Eppler
  - header: Digitization of archival items
    value: Chrissy Huhn and UC Berkeley Library IT
  - header: Oral history recordings at Berkeley
    value: Pablo Gonzalez and Angelica Garcia
  - header: Audio editing and captioning
    value: Amanda Belantara
  - header: Tape sync recordings
    value: Sonia Chaidez, Caleb Hodgson, Scott Leader, Emilce Quiroz, and Amanda Belantara
  - header: Sound mixing
    value: Michael Cacioppo Belantara
  - header: Homepage illustration
    value: Courtesy of Malaquías Montoya, modified by Inaiah Lujan with permisson
---


At the intersection of Chicana/o/x  Studies, Digital Humanities and Library History, *Bibliopolítica: A Digital History of the Chicano Studies Library* chronicles the history of one of the first Chicana/o/x collections, the Chicano Studies Library at the University of California, Berkeley.

Bibliopolítica shares the stories of trailblazing library workers, students and community members who worked to preserve and make Chicana/o/x  resources available. Featuring photographs, ephemera, archival documents, and oral histories, Bibliopolítica offers an original digital collection of primary sources and is the first audiovisual history of this special place that helped redefine what libraries could be. 

Bibliopolítica takes its name from a book of the same title that Chabrán and librarian colleague Francisco García-Ayvens published in 1984, *BiblioPolítica: Chicano Perspectives on Library Service in the United States*. In 2024, it remains one of the few titles dedicated to the discussion of Chicana/o/x librarianship. *Bibliopolítica: a Digital History of the Chicano Studies Library* adds to this important conversation, but it is only the beginning of a much needed longer and more detailed history of the Chicano Studies Library and the contributions of Chicana/o/x library workers. 


## Project Team

<div class="not-prose">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
  {% for person in team %}
  {% if person.url %}<a a href="{{ person.url }}" target="_none">{% endif %}
  <div class="flex items-top gap-4">
    <div class="flex-none">
      <div class="avatar">
        <div class="w-20 h-20 rounded-full ">
          <img src="{{ person.image | default: '/assets/filler.png' | url }}" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="font-semibold text-xl">{{ person.name }}</div>
      <div class="leading-tight text-base font-light">{{ person.blurb }}</div>
    </div>
  </div>
  {% if person.url %}</a>{% endif %}
  {% endfor %}
  </div>
</div>

## Additional Credits

{% for credit in additional_credits %}
<div class="max-w-prose mb-2">
{{ credit.header }}:<span class="ml-2 opacity-80">{{ credit.value }}</span>
</div>
{% endfor %}


<div class="flex flex-wrap justify-between mt-8">
  <div class="lg:basis-3/5 lg:pr-4 basis-full" markdown="1">

## Gratitude

Many thanks to everyone who agreed to be interviewed and share your time and stories. 

Thanks to Angie Chabrám, Roberto Haro, Francisco Hernandez, Ysidro Macías, Juan Rodriguez, Nina Genera, and Carolyn Soto who shared important information but were not able to be interviewed.
 
We would like to acknowledge the following people who made many contributions to the Chicano Studies Library. These are Jose Arce, Herminio Rios Myrtha Chabrán, John Gonzales, Raymond Padilla, Martha Rodriguez, and Oscar Treviño. Others who have also passed were not officially part of the library but who contributed to its story are: Rafaela Castro, Guillermo Hernandez, Susana Hinojosa, Octavio Romano, and Margaret Ulrich. 

Bibliopolítica was made possible by a New York University Digital Humanities Seed Grant. The project team would like to thank The Center for the Humanities, NYU Libraries, and NYU Research Technology for the opportunity and Molly Rogers and Jojo Karlin for their support. 

Heartfelt thanks to Emily Drabinski for generously providing additional support for travel and tape sync recordings. Thank you, Emily, for helping make this project possible. 

Thanks to the Ethnic Studies Library at UC Berkeley for providing additional funding in support of the project.

Many thanks to Pablo Gonzalez, Continuing Lecturer, Chicana/o Studies Program and Ethnic Studies for recording with us and giving permission to record the oral histories with staff in the Ethnic Studies ChangeMaker Podcast Studio.

Thanks to NYU Libraries Office of Budget and Finance team for your generous guidance and administrative support.

  </div>
  <div class="lg:basis-2/5 lg:pl-4 lg:pt-12 basis-full">
    <div class="lg:text-right ml-2">
      <button id="prev-feature" class="h-8 w-8 md:h-12 md:w-12 md:-mr-2 text-accent hover:text-neutral-content tooltip tooltip-left" data-tip="Previous">{% include "svg/arrow-left.svg" %}</button>
      <button id="play-feature" class="hidden h-8 w-8 md:h-12 md:w-12 md:-mr-2 text-accent hover:text-neutral-content tooltip tooltip-bottom" data-tip="Autoplay">
        {% include "svg/play.svg" %}
      </button>
      <button id="pause-feature" class="h-8 w-8 md:h-12 md:w-12 md:-mr-2 text-accent hover:text-neutral-content tooltip tooltip-bottom" data-tip="Pause">
        {% include "svg/pause.svg" %}
      </button>
      <button id="next-feature" class="h-8 w-8 md:h-12 md:w-12 text-accent hover:text-neutral-content tooltip tooltip-right" data-tip="Next">{% include "svg/arrow-right.svg" %}</button>
    </div>
    <div id="feature-carousel" class="w-full md:ml-2 md:text-right no-prose flex-none">
      {%- for img in images -%}
      <div class="w-full h-content">
        <img src="{{ img.url | url }}" alt="{{ img.caption }}" class="mt-0 mb-2 w-full h-auto mx-auto" />            
        <div class="md:text-base text-sm leading-snug">{{ img.caption }}</div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</div>

## Contributor Notes

<blockquote class="text-lg italic not-prose border-l-2 border-base-content pl-4">
  <svg class="w-8 h-6 float-left m-0 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
  <p>"Creating the Bibliopolítica digital exhibit allowed me to make present special moments of labor and why I thought they were important. It allowed me to continue conversations with past colleagues who we were able to interview as well as an opportunity to celebrate those who have passed who I learned from and struggled with, especially Jose Antonio Arce and my Aunt Myrtha Chabrán. It has also provided moments of learning and a rare opportunity to work with a gifted team. For all of this I am extremely grateful. My hope is that this exhibit not only brings a history of a library alive but also points to the importance of documenting subaltern histories."</p>
  <p class="mt-4">–Richard Chabran</p>
</blockquote>

<blockquote class="mt-8 text-lg italic not-prose border-l-2 border-base-content pl-4">
  <svg class="w-8 h-6 float-left m-0 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
  <p>"I am grateful to all the staffs of the Chicano Studies Library and to all the staffs of the Ethnic Studies Library. Their work and their courage gave life to both libraries. I want to especially thank Gema Paola Morales-Mendoza and August Eli Eppler for their teamwork in searching through files and boxes for most of the historical documents in Bibliopolítica. "</p>
  <p class="mt-4">–Lillian Castillo-Speed</p>
</blockquote>

Francisco García-Ayvens, friend and former Coordinator of the Chicano Studies library, passed away in 2018. Richard Chabrán and Lillian Castillo-Speed shared many collaborations and conversations with Francisco about the Chicano Periodical Index, the Chicano Thesaurus and Chicana/o/x librarianship. His participation was missed while working on this version of the Bibliopolítica project.


## Contact 

bibliopolitica@gmail.com

<script>
  var prevFeatureButton  = document.querySelector('#prev-feature');
  var nextFeatureButton  = document.querySelector('#next-feature');
  var playFeatureButton  = document.querySelector('#play-feature');
  var pauseFeatureButton = document.querySelector('#pause-feature');
  var featureCarousel    = new Flickity('#feature-carousel', {
    wrapAround: true,
    cellAlign: 'left',
    imagesLoaded: true,
    prevNextButtons: false,
    fade: true,
    pageDots: false,
    lazyLoad: true,
    draggable: true,
    pauseAutoPlayOnHover: false,
    autoPlay: 6000,
  });
  
  prevFeatureButton.addEventListener('click', () => featureCarousel.previous());
  nextFeatureButton.addEventListener('click', () => featureCarousel.next());

  playFeatureButton.addEventListener( 'click', function() {
    featureCarousel.unpausePlayer();
    pauseFeatureButton.classList.toggle('hidden');
    playFeatureButton.classList.toggle('hidden');
  });
  pauseFeatureButton.addEventListener( 'click', function() {
    featureCarousel.pausePlayer();
    pauseFeatureButton.classList.toggle('hidden');
    playFeatureButton.classList.toggle('hidden');
  });
</script>
