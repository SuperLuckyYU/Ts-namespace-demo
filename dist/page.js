"use strict";
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var eleE = document.createElement('div');
            eleE.innerText = 'This is header';
            document.body.appendChild(eleE);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var eleE = document.createElement('div');
            eleE.innerText = 'This is content';
            document.body.appendChild(eleE);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var eleE = document.createElement('div');
            eleE.innerText = 'This is footer';
            document.body.appendChild(eleE);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
