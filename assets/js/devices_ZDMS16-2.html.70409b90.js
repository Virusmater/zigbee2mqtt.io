"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40226],{34728:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>c});var d=o(6254);const n={},i=(0,o(52753).A)(n,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[7]||(t[7]=(0,d.Lk)("h1",{id:"avatto-zdms16-2",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#avatto-zdms16-2"},[(0,d.Lk)("span",null,"AVATTO ZDMS16-2")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"ZDMS16-2")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=AVATTO"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("AVATTO")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Zigbee 2 channels Dimmer")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"light (state, brightness, min_brightness, max_brightness), countdown, switch_type, power_on_behavior")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZDMS16-2.png",alt:"AVATTO ZDMS16-2"})])],-1))])]),t[8]||(t[8]=(0,d.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l1-endpoint"><span>Light (l1 endpoint)</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l1&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l1&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l1-endpoint"><span>Countdown (numeric, l1 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="switch-type-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l1-endpoint"><span>Switch type (enum, l1 endpoint)</span></a></h3><p>Type of the switch. Value can be found in the published state on the <code>switch_type_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>state</code>, <code>momentary</code>.</p><h3 id="light-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l2-endpoint"><span>Light (l2 endpoint)</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l2&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l2&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l2-endpoint"><span>Countdown (numeric, l2 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="switch-type-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l2-endpoint"><span>Switch type (enum, l2 endpoint)</span></a></h3><p>Type of the switch. Value can be found in the published state on the <code>switch_type_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>state</code>, <code>momentary</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p>',17))])}]]),c=JSON.parse('{"path":"/devices/ZDMS16-2.html","title":"AVATTO ZDMS16-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"AVATTO ZDMS16-2 control via MQTT","description":"Integrate your AVATTO ZDMS16-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light (l1 endpoint)","slug":"light-l1-endpoint","link":"#light-l1-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l1 endpoint)","slug":"countdown-numeric-l1-endpoint","link":"#countdown-numeric-l1-endpoint","children":[]},{"level":3,"title":"Switch type (enum, l1 endpoint)","slug":"switch-type-enum-l1-endpoint","link":"#switch-type-enum-l1-endpoint","children":[]},{"level":3,"title":"Light (l2 endpoint)","slug":"light-l2-endpoint","link":"#light-l2-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l2 endpoint)","slug":"countdown-numeric-l2-endpoint","link":"#countdown-numeric-l2-endpoint","children":[]},{"level":3,"title":"Switch type (enum, l2 endpoint)","slug":"switch-type-enum-l2-endpoint","link":"#switch-type-enum-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/ZDMS16-2.md"}')}}]);