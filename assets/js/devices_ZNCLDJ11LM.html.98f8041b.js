"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35372],{29823:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>o,data:()=>i});var a=s(6254);const t={},o=(0,s(52753).A)(t,[["render",function(e,n){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[11]||(n[11]=(0,a.Lk)("h1",{id:"aqara-zncldj11lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-zncldj11lm"},[(0,a.Lk)("span",null,"Aqara ZNCLDJ11LM")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZNCLDJ11LM")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(s,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Aqara")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Curtain controller")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), running, motor_state")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCLDJ11LM.png",alt:"Aqara ZNCLDJ11LM"})])],-1))])]),n[12]||(n[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold button for about 5 seconds until blue light turn on.</p><p>If you need to reset device first, hold button longer until red light turn on.</p><h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes"><span>Configuration of device attributes</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;reverse_direction&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;hand_open&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;reset_limits&quot;</span><span class="token operator">:</span> xxx</span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>reverse_direction</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Device can be configured to act in an opposite direction.</li><li><strong>hand_open</strong>: (<code>true</code>/<code>false</code>, default: <code>true</code>). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.</li><li><strong>reset_limits</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Reset the motor. When a path was cleared from obstacles.</li></ul><p>You can send a subset of options, all options that won&#39;t be specified will be revered to default.</p><p>After changing <code>reverse_direction</code> you will need to fully open and fully close the curtain so the motor will re-detect edges. <code>reverse_direction</code> will get new state only after this recalibration.</p><h3 id="lost-configuration-on-long-power-outage" tabindex="-1"><a class="header-anchor" href="#lost-configuration-on-long-power-outage"><span>Lost configuration on long power outage</span></a></h3><p>If motor is used without battery it may lose configuration after long power outage. In that case you need to perform end stops calibration again publishing the following command sequence with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><ol><li><code>{ &quot;options&quot;: { &quot;reset_limits&quot;: true } }</code></li><li><code>{ &quot;state&quot;: &quot;close&quot; }</code></li><li>Wait here for curtain closure.</li><li><code>{ &quot;state&quot;: &quot;open&quot; }</code></li></ol><p>Home Assistant automation example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> Calibrate curtain</span>\n<span class="line">  <span class="token key atrule">trigger</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> homeassistant</span>\n<span class="line">    <span class="token key atrule">event</span><span class="token punctuation">:</span> start</span>\n<span class="line">  <span class="token key atrule">action</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish</span>\n<span class="line">    <span class="token key atrule">data</span><span class="token punctuation">:</span></span>\n<span class="line">      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set</span>\n<span class="line">      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&quot;{ \\&quot;options\\&quot;: { \\&quot;reset_limits\\&quot;: true } }&quot;</span></span>\n<span class="line">      <span class="token comment"># note &quot;&quot; are escaped with \\ else will not work if you want to send payload as json</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.close_cover</span>\n<span class="line">    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">delay</span><span class="token punctuation">:</span></span>\n<span class="line">      <span class="token key atrule">seconds</span><span class="token punctuation">:</span> <span class="token number">13</span> <span class="token comment">#wait for closure complete</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.open_cover</span>\n<span class="line">    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Motor leaves calibration mode automatically after it reaches the both open and close curtain position limits. Calibration is mandatory for proper position reporting and ability to set intermediate positions.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',17)),(0,a.Lk)("p",null,[n[8]||(n[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(s,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("OTA updates")]))),_:1}),n[9]||(n[9]=(0,a.eW)("."))]),n[13]||(n[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(s,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>n[10]||(n[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),n[14]||(n[14]=(0,a.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="running-binary" tabindex="-1"><a class="header-anchor" href="#running-binary"><span>Running (binary)</span></a></h3><p>Whether the motor is moving or not. Value can be found in the published state on the <code>running</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> running is ON, if <code>false</code> OFF.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum"><span>Motor state (enum)</span></a></h3><p>Motor state. Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>stopped</code>, <code>opening</code>, <code>closing</code>.</p>',8))])}]]),i=JSON.parse('{"path":"/devices/ZNCLDJ11LM.html","title":"Aqara ZNCLDJ11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNCLDJ11LM control via MQTT","description":"Integrate your Aqara ZNCLDJ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]},{"level":3,"title":"Lost configuration on long power outage","slug":"lost-configuration-on-long-power-outage","link":"#lost-configuration-on-long-power-outage","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Running (binary)","slug":"running-binary","link":"#running-binary","children":[]},{"level":3,"title":"Motor state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/ZNCLDJ11LM.md"}')}}]);