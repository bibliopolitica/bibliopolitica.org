---
layout: base
pagination:
    data: items
    size: 1
    alias: item
permalink: "/item/{{ item.id }}.html"
---

<article id="item-content-area" class="container mx-auto px-6 py-20 max-w-3xl prose lg:prose-lg">
  <h1>{{ item.label }}</h1>
  <div class="flex mb-10 w-full justify-between">
    <a href="{{ pagination.href.previous | default: pagination.href.last | url }}" class="link basis-1/3 text-xs">Previous:<br>{{ pagination.page.previous.label | default: pagination.page.last.label }}</a>
    <a href="{{ pagination.href.next | default: pagination.href.first | url }}" class="link basis-1/3 text-xs text-right">Next:<br>{{ pagination.page.next.label | default: pagination.page.first.label }}</a>
  </div>

  {% include "components/viewers/osd-iiif.html" %}

  <div class="flex flex-wrap mt-10">
    <div class="basis-1/3 py-2"><b>Label</b></div>
    <div class="basis-2/3 py-2">{{ item.label }}</div>
    <div class="basis-1/3 py-2"><b>Person or Creator</b></div>
    <div class="basis-2/3 py-2">Arce, José Antonio, 1948-2018</div>
    <div class="basis-1/3 py-2"><b>Dimensions</b></div>
    <div class="basis-2/3 py-2">8.5 x 11 inches</div>
    <div class="basis-1/3 py-2"><b>Language</b></div>
    <div class="basis-2/3 py-2">English</div>
    <div class="basis-1/3 py-2"><b>Date of Production</b></div>
    <div class="basis-2/3 py-2">Approximately 1972-2001</div>
    <div class="basis-1/3 py-2"><b>Format</b></div>
    <div class="basis-2/3 py-2">
      <a class="link link-primary">volume</a>;
      <a class="link link-primary">integrating resource</a>;
      <a class="link link-primary">typescript</a>
    </div>
    <div class="basis-1/3 py-2"><b>IIIF Resource</b></div>
    <div class="basis-2/3 py-2">
      <a class="link" href="{{ item.manifest_url }}" target="_none">JSON Manifest</a>
    </div>
  </div>
</article>
