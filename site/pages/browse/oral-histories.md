---
title: "Oral Histories"
description: "TBD"
layout: page
permalink: "/browse/oral-histories/index.html"
# contents:
#   - label: Lillian Castillo-Speed
#   - label: Richard Chabrán
#   - label: Carlos Muñoz Jr.
#   - label: Chela Rios-Muñoz
#   - label: Clementina Duron
#   - label: Larry Trujillo
#   - label: Lucha Corpi
#   - label: Malaquias Montoya
#   - label: Purita Mesa
#   - label: Sandra Ríos Balderrama
#   - label: Elva Yañez

---

The Bibliopolítica Oral History Collection includes stories from Chicanx Studies faculty and former staff from the Chicano Studies Library. Recorded in part at the Ethnic Studies Changemaker Studio at University of California Berkeley as well as remotely, these voices capture the history and heart of the library. The interviews were conducted by Amanda Belantara in collaboration with Richard Chabrán and Lillian Castillo-Speed. 

## Contents

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 not-prose">
  {% for history in oral-histories %}
  <a class="inline-block" href="{{ '/history/' | url }}{{ history.id }}">
    <div class="card bg-neutral duration-500 hover:scale-105">
      <img src="{{ '/assets/filler.png' | url }}" alt="" class="rounded-t-lg object-cover h-36 w-full mx-auto" />
      <div class="card-body">
        <div class="card-title text-lg md:text-xl font-bold">
          {{ history.label | remove: " Oral History Interview" }}
        </div>
        <span class="text-secondary text-sm md:text-base">
          Very short tagline about role with the CSL
        </span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
