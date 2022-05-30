"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Author: @heiheihang"},p="0242 - Valid Anagram (Easy)",s={unversionedId:"0200-0299/valid-anagram-easy",id:"0200-0299/valid-anagram-easy",title:"0242 - Valid Anagram (Easy)",description:"Author: @heiheihang",source:"@site/solutions/0200-0299/0242-valid-anagram-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/valid-anagram-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/valid-anagram-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0242-valid-anagram-easy.md",tags:[],version:"current",sidebarPosition:242,frontMatter:{description:"Author: @heiheihang"},sidebar:"tutorialSidebar",previous:{title:"0228 - Summary Ranges (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/summary-ranges-easy"},next:{title:"0258 - Add Digits (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/add-digits-easy"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Python Beginner Approach",id:"python-beginner-approach",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0242---valid-anagram-easy"},"0242 - Valid Anagram (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two strings ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if")," ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," ",(0,o.kt)("em",{parentName:"p"},"is an anagram of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),(0,o.kt)("em",{parentName:"p"},", and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ",(0,o.kt)("em",{parentName:"p"},"otherwise"),"."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "anagram", t = "nagaram"\nOutput: true\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "rat", t = "car"\nOutput: false\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length, t.length <= 5 * 104")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"t")," consist of lowercase English letters.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow up:")," What if the inputs contain Unicode characters? How would you adapt your solution to such a case?"),(0,o.kt)("h2",{id:"python-beginner-approach"},"Python Beginner Approach"),(0,o.kt)("p",null,"TBC"))}d.isMDXComponent=!0}}]);