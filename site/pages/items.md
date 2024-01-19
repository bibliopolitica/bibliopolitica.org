---
layout: base
pagination:
    data: items
    size: 1
    alias: item
permalink: "/item/{{ item.id | slugify }}/"
---

<article id="item-content-area" class="container mx-auto px-6 py-20 max-w-3xl prose lg:prose-lg">
  <h1>{{ item.label }}</h1>

  <div class="flex justify-between mb-4">
    <a href="{{ pagination.href.previous }}" class="link">Previous</a>
    <a href="{{ pagination.href.next }}" class="link">Next</a>
  </div>

  {% include "components/viewers/osd-iiif.html" %}

  <div class="grid grid-cols-3 gap-4">
    <div><b>Label</b></div>
    <div class="col-span-2">{{ item.label }}</div>
    <div><b>Person or Creator</b></div>
    <div class="col-span-2">Arce, José Antonio, 1948-2018</div>
    <div><b>Dimensions</b></div>
    <div class="col-span-2">8.5 x 11 inches</div>
    <div><b>Language</b></div>
    <div class="col-span-2">English</div>
    <div><b>Date of Production / Publication</b></div>
    <div class="col-span-2">approximately 1972-2001</div>
    <div><b>Format</b></div>
    <div class="col-span-2">
      <a class="link link-primary">volume</a>;
      <a class="link link-primary">integrating resource</a>;
      <a class="link link-primary">typescript</a>
    </div>
    <div><b>IIIF</b></div>
    <div class="col-span-2">
      <a class="link" href="{{ item.manifest_url }}" target="_none">JSON Manifest</a>
    </div>
  </div>
</article>
