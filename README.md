After the build, it is necessary to correct the import urls

**build/static/css/main.css**

from:

``url(/static/media/MaisonNeueWEB-Bold.b2e14ca5c28dcb1f274e.woff)``

to:

``url(../media/MaisonNeueWEB-Bold.b2e14ca5c28dcb1f274e.woff)``

**build/index.html**

from:

``src="/static/js/main.7c626e7f.js``

to:

``src="static/js/main.ad1c88b3.js"``
