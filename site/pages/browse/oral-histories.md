---
title: "Oral Histories"
description: "TBD"
layout: page
permalink: "/browse/oral-histories/index.html"
---

The Bibliopolítica Oral History Collection includes stories from Chicanx Studies faculty and former staff from the Chicano Studies Library. Recorded in part at the Ethnic Studies Changemaker Studio at University of California Berkeley as well as remotely, these voices capture the history and heart of the library. The interviews were conducted by Amanda Belantara in collaboration with Richard Chabrán and Lillian Castillo-Speed. 

## Contents

{% for history in oral-histories %}<a href="{{ '/history' | url }}/{{ history.id }}.html" class="btn btn-sm btn-outline btn-accent mr-2 mb-1 no-underline font-sans">{{ history.label }}</a>{% endfor %}
