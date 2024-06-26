---
title: "Explore the Exhibit"
lang: "en"
layout: page
permalink: "/browse/exhibit/en.html"
---

<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 not-prose">
  {%- for exhibit in collections.exhibit-en -%}
    {% include "partials/exhibit-card.html" %}
  {%- endfor -%}
</div>
