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
  - label: Credits & Gratitude
    anchor: '#credits-and-gratitude'
  - label: Contact
    anchor: '#contact'
images:
  - url: '/media/013.jpg'
    caption: "TODO: Add caption here"
  - url: '/media/017.jpg'
    caption: "TODO: Add caption here" 
  - url: '/media/023.jpg'
    caption: "TODO: Add caption here"
  - url: '/media/028.jpg'
    caption: "TODO: Add caption here"
---
At the intersection of Chicanx Studies, Digital Humanities and Library History, *Bibliopolítica: a Digital History of the Chicano Studies Library* chronicles the history of one of the first Chicanx collections, the UC Berkeley Chicano Studies Library (CSL).

Bibliopolítica shares the stories of trailblazing library workers, students and community members who tirelessly worked to preserve and make Chicanx resources available. Featuring photographs, ephemera, archival documents, and oral histories, Bibliopolítica offers an original digital collection of primary sources and is the first audiovisual history of this pioneering library that helped redefine what libraries could be. 

## Project Team

<div class="not-prose">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
  {% for person in team %}
  {% if person.url %}<a a href="{{ person.url }}" target="_none">{% endif %}
  <div class="flex items-top my-6 gap-4">
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

<div class="flex flex-wrap justify-between mt-8">
  <div class="md:basis-3/5 md:pr-4 basis-full" markdown="1">

## Credits & Gratitude

Stuff about what the team did (vs the section above about who they are?)

Thanking NYU DH seed grant, UCB, Oral History participants, etc.

Proin maximus orci quis dapibus tristique. Cras id diam in urna congue vestibulum ut sit amet felis. Phasellus auctor, justo vel gravida ultrices, felis lectus auctor massa, nec commodo lectus massa vitae libero. Phasellus luctus ultrices risus, id cursus eros consequat eu. Donec sed purus dapibus, aliquet mi quis, imperdiet mauris. Suspendisse vehicula orci arcu, et gravida ante maximus nec. Sed eget dolor et lorem convallis finibus eget eleifend tellus. Etiam mauris est, vulputate vitae quam sed, auctor ultricies nunc.

Donec sit amet elit fringilla, euismod ipsum ut, egestas sem. Maecenas vestibulum enim et orci viverra semper. Aenean consectetur arcu a mi posuere, vitae pretium nisl auctor. Proin malesuada ligula vel odio rutrum elementum. Duis at erat sollicitudin, mattis arcu id, tincidunt mauris. Proin eu sagittis nisi. Aenean nec enim risus.

  </div>
  <div class="md:basis-2/5 md:pl-4 md:pt-12 basis-full">
    <div class="md:text-right ml-2">
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



## Contact 

Link to gmail address, Google form, etc. with a sentence or two of context.
