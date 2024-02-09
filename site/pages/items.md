---
layout: base
pagination:
    data: items
    size: 1
    alias: item
permalink: "/item/{{ item.id }}.html"
---

<div class="flex p-5 pb-3 items-center">
  <div class="basis-3/4">
    <h1 class="text-3xl md:text-4xl font-bold">{{ item.label }}</h1>
  </div>
  <div class="basis-1/4 h-12 text-primary text-right flex justify-end">
    <a href="{{ pagination.href.previous | default: pagination.href.last | url }}" class="-mr-1 text-neutral-950 hover:text-accent" data-tip="Previous item">{% include "svg/arrow-left.svg" %}</a>
    <a href="{{ pagination.href.next | default: pagination.href.first | url }}" class="text-neutral-950 hover:text-accent" data-tip="Next item">{% include "svg/arrow-right.svg" %}</a>
  </div>
</div>
<article id="item-content-area" class="px-5 pb-5 md:flex">
  <div class="md:basis-3/5 bg-neutral">
  {% include "components/viewers/osd-iiif.html" %}
  </div>
  <ul class="p-6 space-y-2 border md:basis-2/5 md:text-lg md:flex md:flex-col md:justify-end">
    <li><b>Label:</b> {{ item.label }}</li>
    <li><b>Person or Creator:</b> Arce, José Antonio, 1948-2018</li>
    <li><b>Dimensions:</b> 8.5 x 11 inches</li>
    <li><b>Language:</b> English</li>
    <li><b>Date of Production:</b> Approximately 1972-2001</li>
    <li><b>Format:</b>
      <a class="link">volume</a>;
      <a class="link">integrating resource</a>;
      <a class="link">typescript</a>
    </li>
    <li><b>IIIF Resource:</b>
      <a class="link" href="{{ item.manifest_url }}" target="_none">JSON Manifest</a>
    </li>
  </ul>
</article>

<!-- <div class=" grid grid-cols-2 mt-5 px-5 font-normal">
  <a href="{{ pagination.href.previous | default: pagination.href.last | url }}" class="join-item btn btn-outline">PREVIOUS: {{ pagination.page.previous.label | default: pagination.page.last.label }}</a>
  <a href="{{ pagination.href.next | default: pagination.href.first | url }}" class="join-item btn btn-outline">NEXT: {{ pagination.page.next.label | default: pagination.page.first.label }} &rarr;</a>
</div> -->