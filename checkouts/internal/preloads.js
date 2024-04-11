(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f988fd5acd4aec34163f.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/35.latest.en.6fbd30c71f4bdc11b97f.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/807.latest.en.1f38cac7b4361d75ed7d.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.en.f34c11907856ed868a97.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.d90b075562aa443928b3.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.08105131cffb5e5f123d.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.latest.en.e47f1150648f6ccaa7ba.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.7930eb638be8fdd8b4fe.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.ce6eac4958bd25e9d6a6.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.0d51a38fb3dce4dc0824.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/35.latest.en.00d9d9ada26cf9464db7.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.latest.en.1b702be1dcbc7c92ed66.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.7f28514b2e3815a27a2d.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0031/5765/5641/files/Logo1200_x320.png?v=1650360815"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res[0], next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        })();
    }

    function onLoaded() {
        preconnectAssets();
        prefetchAssets();
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();