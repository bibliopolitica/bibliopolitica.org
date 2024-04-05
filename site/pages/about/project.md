---
title: "About the Project (2024)"
description: "TBD"
layout: page
team:
  - name: Amanda Belantara
    url: https://library.nyu.edu/people/amanda-belantara/
    image: https://s3.amazonaws.com/nyulibraries-www-assets/people-images/amanda-belantara.jpg
  - name: Lillian Castillo-Speed
    image: https://www.lib.berkeley.edu/sites/default/files/inline-images/webLily-01190%202_0.jpg
    url: https://www.lib.berkeley.edu/help/staff-directory/lillian-castillo-speed
  - name: Richard Chabrán
    image: https://www.ala.org/aboutala/sites/all/files/content/olos/chabran.jpg
  - name: Emily Drabinski
  - name: Matthew Haugen
    image: https://library.columbia.edu/content/libraryweb/bts/cataloging/staff/_jcr_content/layout_par_main_1/image_v2_898913862.img.jpg/1659756355614.jpg
  - name: Inaiah Lujan
    url: https://www.inaiahlujan.com/
    image: https://i.discogs.com/hglAe4rRAp8PjovJXf__UtxO4k20xzoePa9yYSlRC1E/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ0NTky/ODItMTU4NjExOTk0/My0yODMzLmpwZWc.jpeg
  - name: Ed Madrid
    url: https://edmadrid.com/
  - name: Marii Nyrop
    url: https://marii.info
permalink: "/about/project.html"
contents:
  - label: Contact
    anchor: '#contact'
  - label: Project Team
    anchor: '#project-team'
  - label: Credits & Gratitude
    anchor: '#credits-and-gratitude'
---
At the intersection of Chicanx Studies, Digital Humanities and Library History, *Bibliopolítica: a Digital History of the Chicano Studies Library* chronicles the history of one of the first Chicanx collections, the UC Berkeley Chicano Studies Library (CSL).

Bibliopolítica shares the stories of trailblazing library workers, students and community members who tirelessly worked to preserve and make Chicanx resources available. Featuring photographs, ephemera, archival documents, and oral histories, Bibliopolítica offers an original digital collection of primary sources and is the first audiovisual history of this pioneering library that helped redefine what libraries could be. 

## Contact 

Link to gmail address, Google form, etc. with a sentence or two of context.

## Project Team

<code id="opt-1">OPTION 1 W/ SHORT LINES AND IMAGES</code>

<div class="not-prose">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
  {% for person in team %}
  {% if person.url %}<a a href="{{ person.url }}" target="_none">{% endif %}
  <div class="flex items-center my-6 gap-4">
    <div class="flex-none">
      <div class="avatar">
        <div class="w-20 h-20 rounded-full grayscale">
          <img src="{{ '/assets/filler.png' | url }}" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="font-semibold text-xl">{{ person.name }}</div>
      <div class="leading-tight font-light">{{ person.blurb | default: "Lorem ipsum dolor si amet et can be multiple titles and institutions but not a full sentence" }}</div>
    </div>
  </div>
  {% if person.url %}</a>{% endif %}
  {% endfor %}
  </div>
</div>

<hr>

<code id="opt-2">OPTION 2 W/ LONGER LINES AND NO IMAGES</code>

<div class="not-prose">
  <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
  {% for person in team %}
  <div class="flex items-center my-6 gap-4">
    <div class="flex-1">
      {% if person.url %}<a a class="hover:text-accent" href="{{ person.url }}" target="_none">{% endif %}
      <div class="font-semibold text-xl">{{ person.name }}</div>
      {% if person.url %}</a>{% endif %}
      <div class="leading-tight font-light">{{ person.blurb | default: "Mauris vel pellentesque justo. Phasellus auctor rutrum risus, quis gravida magna. Nam tristique dapibus purus, quis mattis nisl tempor et. Nam consectetur commodo nibh, at malesuada sapien auctor elementum. Nullam in enim et nisl facilisis venenatis. Praesent vel risus eget erat viverra lobortis. Donec eget aliquet urna, ut ornare ex. Nunc sagittis magna id est pellentesque, at aliquet turpis porttitor. Ut consequat est diam." }}</div>
    </div>
  </div>
  {% endfor %}
  </div>
</div>

<hr>

## Credits & Gratitude

Stuff about what the team did (vs the section above about who they are?)

Thanking NYU DH seed grant, UCB, Oral History participants, etc.

Proin maximus orci quis dapibus tristique. Cras id diam in urna congue vestibulum ut sit amet felis. Phasellus auctor, justo vel gravida ultrices, felis lectus auctor massa, nec commodo lectus massa vitae libero. Phasellus luctus ultrices risus, id cursus eros consequat eu. Donec sed purus dapibus, aliquet mi quis, imperdiet mauris. Suspendisse vehicula orci arcu, et gravida ante maximus nec. Sed eget dolor et lorem convallis finibus eget eleifend tellus. Etiam mauris est, vulputate vitae quam sed, auctor ultricies nunc.

Donec sit amet elit fringilla, euismod ipsum ut, egestas sem. Maecenas vestibulum enim et orci viverra semper. Aenean consectetur arcu a mi posuere, vitae pretium nisl auctor. Proin malesuada ligula vel odio rutrum elementum. Duis at erat sollicitudin, mattis arcu id, tincidunt mauris. Proin eu sagittis nisi. Aenean nec enim risus. 


