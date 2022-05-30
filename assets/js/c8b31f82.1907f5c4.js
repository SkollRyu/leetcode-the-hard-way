"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8131],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/"},c="2144 - Minimum Cost of Buying Candies With Discount (Easy)",u={unversionedId:"2100-2199/minimum-cost-of-buying-candies-with-discount-easy",id:"2100-2199/minimum-cost-of-buying-candies-with-discount-easy",title:"2144 - Minimum Cost of Buying Candies With Discount (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/",source:"@site/solutions/2100-2199/2144-minimum-cost-of-buying-candies-with-discount-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-cost-of-buying-candies-with-discount-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-cost-of-buying-candies-with-discount-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2144-minimum-cost-of-buying-candies-with-discount-easy.md",tags:[],version:"current",sidebarPosition:2144,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/"},sidebar:"tutorialSidebar",previous:{title:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard"},next:{title:"2145 - Count the Hidden Sequences (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-the-hidden-sequences-medium"}},l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2},{value:"C++",id:"c",level:3},{value:"Python3",id:"python3",level:3}],d={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2144---minimum-cost-of-buying-candies-with-discount-easy"},"2144 - Minimum Cost of Buying Candies With Discount (Easy)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"A shop is selling candies at a discount. For ",(0,a.kt)("strong",{parentName:"p"},"every two")," candies sold, the shop gives a ",(0,a.kt)("strong",{parentName:"p"},"third")," candy for ",(0,a.kt)("strong",{parentName:"p"},"free"),"."),(0,a.kt)("p",null,"The customer can choose ",(0,a.kt)("strong",{parentName:"p"},"any")," candy to take away for free as long as the cost of the chosen candy is less than or equal to the ",(0,a.kt)("strong",{parentName:"p"},"minimum")," cost of the two candies bought."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example, if there are ",(0,a.kt)("inlineCode",{parentName:"li"},"4")," candies with costs ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),", and the customer buys candies with costs ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),", they can take the candy with cost ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," for free, but not the candy with cost ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,a.kt)("p",null,"Given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"cost"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"cost[i]")," denotes the cost of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," candy, return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"minimum cost")," of buying ",(0,a.kt)("strong",{parentName:"em"},"all")," the candies"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: cost = [1,2,3]\nOutput: 5\nExplanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.\nThe total cost of buying all candies is 2 + 3 = 5. This is the only way we can buy the candies.\nNote that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.\nThe cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: cost = [6,5,7,9,2,2]\nOutput: 23\nExplanation: The way in which we can get the minimum cost is described below:\n- Buy candies with costs 9 and 7\n- Take the candy with cost 6 for free\n- We buy candies with costs 5 and 2\n- Take the last remaining candy with cost 2 for free\nHence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: cost = [5,5]\nOutput: 10\nExplanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.\nHence, the minimum cost to buy all candies is 5 + 5 = 10.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= cost.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= cost[i] <= 100"))),(0,a.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,a.kt)("p",null,"We can take any candy away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought. If we sort the array in a non-increasing order, the candies we can take away to save most cost would be the 3rd, 6th, 9th, and so on. Therefore, we can skip all those costs and add the rest of them to answer."),(0,a.kt)("h3",{id:"c"},"C++"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumCost(vector<int>& cost) {\n        int ans = 0;\n        sort(cost.rbegin(), cost.rend());\n        for (int i = 0; i < cost.size(); i++) {\n            if ((i + 1) % 3 == 0) continue;\n            ans += cost[i];\n        }\n        return ans;\n    }\n};\n")),(0,a.kt)("h3",{id:"python3"},"Python3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minimumCost(self, cost: List[int]) -> int:\n        return sum(x for i, x in enumerate(sorted(cost, reverse=True)) if (i + 1) % 3)\n")))}p.isMDXComponent=!0}}]);