---
title: "Oral Histories"
description: "TBD"
layout: page
permalink: "/browse/oral-histories/index.html"
---

The Bibliopolítica Oral History Collection includes stories from Chicanx Studies faculty and former staff from the Chicano Studies Library. Recorded in part at the Ethnic Studies Changemaker Studio at University of California Berkeley as well as remotely, these voices capture the history and heart of the library. The interviews were conducted by Amanda Belantara in collaboration with Richard Chabrán and Lillian Castillo-Speed. 

## Contents

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 not-prose">
  {% for history in oral-histories %}
  <a class="inline-block" href="{{ '/history/' | url }}{{ history.id }}">
    <div class="card bg-neutral duration-500 hover:scale-105">
      <img src="{{ '/media/oh' | url }}/{{ history.id }}.jpg" alt="Photo of {{ history.label | remove: ' Oral History Interview' }}" class="rounded-t-lg object-cover object-center h-52 w-full mx-auto" />
      <div class="card-body p-6">
        <div class="card-title text-base md:text-lg font-bold">
          {{ history.label | remove: " Oral History Interview" }}
        </div>
        <span class="text-secondary text-sm">
          Very short tagline about role with the CSL
        </span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
