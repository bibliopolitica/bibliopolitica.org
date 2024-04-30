var resultsContainer  = document.getElementById('results');
var resultsInfo       = document.getElementById('results-info');
var searchInput       = document.getElementById("search-input");
var searchLimit       = document.getElementById("search-limit-select");
var limitOptions      = Array.from(searchLimit.options).map((opt) => opt.value)
var searchSubmit      = document.getElementById("search-submit");
var urlParams         = new URLSearchParams(window.location.search);

function toQueryString(tokens) {
  if (searchLimit.value == 'All Fields') {
    return tokens.map((token) => `${token}^100 +${token}*^10 ${token}~2`).join(' ')
  }
  else {
    limitStr = searchLimit.value.replaceAll(" ", "_");
    return tokens.map((token) => `${limitStr}:${token}^100 +${limitStr}:${token}*^10 ${limitStr}:${token}~2`).join(' ');
  }
}

function submitSearchQuery(idx) {
  let query = '* *'
  if (searchInput.value) {
    input = searchInput.value;
    tokens = input.split(' ');
    query = toQueryString(tokens);
  }  
  return idx.search(query) || [];
}

function truncateString(string){
  let max = 60;
  if (string.length < max) {
    return string;
  }
  else {
    return string.substring(0, max) + "...";
  }
  
}

function appendSearchResults(results, resultsLookupMap) {
  resultsContainer.innerHTML = null;
  results.forEach(function (res) {
    let item = resultsLookupMap[res.ref];
    let resultDiv = document.createElement('div');
    let thumbnail = `https://d1b7k5w7yjwpfg.cloudfront.net/iiif/2/bibliopolitica_${ item.ID }_${ item.ID }_001/full/250,/0/default.jpg`;
    resultDiv.innerHTML = `<div class="mb-8"><a href="${prefixUrl}item/${item.ID}.html"><img loading="lazy" src="${ thumbnail }" alt="thumbnail for ${truncateString(item.Label)}" class="max-w-full h-auto"><div class="mt-2 leading-snug md:text-sm text-xs">${truncateString(item.Label)}</div></a></div>`;
    resultsContainer.appendChild(resultDiv);
  })
}

function appendSearchInfo(results) {
  resultsInfo.innerHTML = null;
  let infoDiv = document.createElement('div');
  infoDiv.innerHTML = `Found ${results.length} results`;
  resultsInfo.appendChild(infoDiv);
}

function inferUrlParams(){
  if (urlParams.has('limit') && limitOptions.includes(urlParams.get('limit')) ) {
    searchLimit.value = urlParams.get('limit');
  }
  if (urlParams.has('query')) {
    searchInput.value = urlParams.get('query');
  }
}

function toDoc(doc) {
  return {
    'ID': doc.ID,
    'Label': doc.Label,
    'Personal_Name': (doc['Personal Name'] || []).join(' '),
    'Summary': doc['Summary'] || '',
    'Topic': (doc['Topic'] || [] ).join(' '),
    'Type': (doc['Type'] || [] ).join(' '),
    'Format': (doc['Format'] || [] ).join(' ')
  };
}

promisedData.then(function(data) {
  const resultsLookupMap = data.reduce(function (memo, doc) {
	  memo[doc.ID] = doc
	  return memo
	}, {});
  let idx = lunr(function () {
    this.ref('ID');
    this.field('Label');
    this.field('Personal_Name');
    this.field('Summary');
    this.field('Topic');
    this.field('Type');
    this.field('Format');

    this.pipeline.remove(lunr.stemmer);
    this.searchPipeline.remove(lunr.stemmer);
    this.pipeline.remove(lunr.stopWordFilter);
    this.searchPipeline.remove(lunr.stopWordFilter);

    data.forEach(function (doc) {
      this.add(toDoc(doc))
    }, this)
  })
  inferUrlParams();
  results = submitSearchQuery(idx);
  appendSearchInfo(results);
  appendSearchResults(results, resultsLookupMap);

  document.body.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      results = submitSearchQuery(idx);
      appendSearchInfo(results);
      appendSearchResults(results, resultsLookupMap);
    }
  });
  searchSubmit.addEventListener('click', function() { 
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
  searchInput.addEventListener('keyup', function() { 
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
  searchLimit.addEventListener('change', function() {
    results = submitSearchQuery(idx);
    appendSearchInfo(results);
    appendSearchResults(results, resultsLookupMap);
  }, false);
});
  