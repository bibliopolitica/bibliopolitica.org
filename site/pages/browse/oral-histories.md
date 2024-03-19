---
title: "Oral Histories"
description: "TBD"
layout: page
permalink: "/browse/oral-histories/index.html"
histories:
  - name: Chela Rios Muñoz
    stream_id: '1_0yzzv0lt'
  - name: Carlos Muñoz Jr.
    stream_id: '1_obm8k8ky'
  - name: Lucha Corpi
    stream_id: '1_n2k4nkqh'
  - name: Malaquías Montoya
    stream_id: '1_gj4t2lzk'
  - name: Purita Mesa
    stream_id: '1_unjt61um'
  - name: Clementina Durón
    stream_id: '1_cqql9nnt'
  - name: Elva Yañez
    stream_id: '1_iion769n'
  - name: Larry Trujillo
    stream_id: '1_757f2n2m'
  - name: Sandra Rios Balderrama
    stream_id: '1_17gy5hii'
  - name: Lillian Castillo-Speed
    stream_id: '1_569qjjr2'
  - name: Richard Chabrán
    stream_id: '1_wr9xz7h6'
---

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. 

## Contents

{% for history in histories %}<a href="#{{ history.name | slugify }}" class="btn btn-sm btn-outline btn-accent mr-2 mb-1 no-underline font-sans">{{ history.name }}</a>{% endfor %}

{% for history in histories %}
### {{ history.name }}
<br>
<iframe class="border border-base-content rounded" id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1674401/sp/167440100/embedIframeJs/uiconf_id/23435151/partner_id/1674401?iframeembed=true&playerId=kaltura_player&entry_id={{ history.stream_id }}&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[LeadWithHLSOnFlash]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_y7lxxlyu" width="100%" height="350" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="{{ history.name }}"></iframe>
<br>
<details>
  <summary class="link text-sm font-mono">Show full transcript</summary>
  <div class="text-sm font-mono">TO DO !!!!!</div>
</details>

<br>
<br>
{% endfor %}
