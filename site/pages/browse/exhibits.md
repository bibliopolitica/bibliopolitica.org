---
title: "Exhibit Essays"
description: "TBD"
layout: page
permalink: "/browse/exhibits/index.html"
contents:
  - label: English
    anchor: '#english'
  - label: Español
    anchor: '#espanol'
---

## English

<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 not-prose">
  {%- for exhibit in collections.exhibit -%}
    {% include "partials/exhibit-card.html" %}
  {%- endfor -%}
</div>

## Español

<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 not-prose">
  {%- for exhibit in collections.exhibit -%}
    {% include "partials/exhibit-card.html" %}
  {%- endfor -%}
</div>
