---
title: "The Bibliopolítica Project"
description: "TBD"
layout: page
team:
  - name: Amanda Belantara
  - name: Lillian Castillo-Speed
  - name: Richard Chabrán
  - name: Emily Drabinski
  - name: Matthew Haugen
  - name: Inaiah Lujan
  - name: Ed Madrid
  - name: Marii Nyrop
permalink: "/about/project.html"
---
*Fall 2022 – Summer 2023*

At the intersection of Chicanx Studies, Digital Humanities and Library History, Bibliopolítica chronicles the history of one of the first Chicanx collections, the UC Berkeley Chicano Studies Library (CSL). The project shares the stories of trailblazing library workers, students and community members who tirelessly worked to preserve and make Chicanx resources available.

Featuring photographs, ephemera, archival documents, and oral histories, Bibliopolítica also offers an original digital collection of primary sources and is the first published history of this pioneering library that helped redefine what libraries could be.

## Credits 

<div class="not-prose">
  <div class="grid md:grid-cols-2 grid-cols-1">
  {% for person in team %}
  <div class="flex gap-4 items-center my-6">
    <div class="flex-none">
      <div class="avatar">
        <div class="w-24 h-24 rounded-full">
          <img src="{{ person.image | default: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' | url }}" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-xl">{{ person.name }}</p>
      <p>{{ person.blurb | default: "TODO: Add a tiny blurb" }}</p>
    </div>
  </div>
  {% endfor %}
  </div>
</div>

## Gratitude

NYU DH seed grant, UCB, people, etc.


