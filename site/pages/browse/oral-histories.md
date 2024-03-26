---
title: "Oral Histories"
description: "TBD"
layout: page
permalink: "/browse/oral-histories/index.html"
---

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. 

## Contents

{% for history in oral-histories %}<a href="{{ '/history' | url }}/{{ history.id }}.html" class="btn btn-sm btn-outline btn-accent mr-2 mb-1 no-underline font-sans">{{ history.label }}</a>{% endfor %}
<!-- 
{% for history in histories %}
### {{ history.name }}
<br>

<br>
<details>
  <summary class="link text-sm font-mono">Show full transcript</summary>
  <div class="text-sm font-mono">TO DO !!!!!</div>
</details>

<br>
<br>
{% endfor %} -->
