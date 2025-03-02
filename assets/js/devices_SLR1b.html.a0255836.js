"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47854],{23413:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>i});var a=n(6254);const o={},s=(0,n(52753).A)(o,[["render",function(e,t){const n=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[15]||(t[15]=(0,a.Lk)("h1",{id:"hive-slr1b",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#hive-slr1b"},[(0,a.Lk)("span",null,"Hive SLR1b")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SLR1b")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(n,{to:"/supported-devices/#v=Hive"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Hive")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Heating thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLR1b.png",alt:"Hive SLR1b"})])],-1))])]),t[16]||(t[16]=(0,a.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,a.Lk)("span",null,"Notes")])],-1)),t[17]||(t[17]=(0,a.Lk)("h3",{id:"pairing",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#pairing"},[(0,a.Lk)("span",null,"Pairing")])],-1)),t[18]||(t[18]=(0,a.Lk)("p",null,"To pair the thermostat with Zigbee2MQTT, follow these steps:",-1)),(0,a.Lk)("ol",null,[t[10]||(t[10]=(0,a.Lk)("li",null,"Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.",-1)),t[11]||(t[11]=(0,a.Lk)("li",null,"Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.",-1)),t[12]||(t[12]=(0,a.Lk)("li",null,"Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.",-1)),t[13]||(t[13]=(0,a.Lk)("li",null,"Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.",-1)),(0,a.Lk)("li",null,[t[8]||(t[8]=(0,a.eW)("You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the ")),(0,a.bF)(n,{to:"/devices/SLT3.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("Hive SLT3B")]))),_:1}),t[9]||(t[9]=(0,a.eW)(". Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly."))])]),t[19]||(t[19]=(0,a.Fv)('<h3 id="how-to-start-edit-native-boost" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost"><span>How to start/edit native boost</span></a></h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_duration&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token number">18</span>  <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><p>Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.</p><h3 id="set-heating-mode-to-manual" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-manual"><span>Set heating mode to MANUAL</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token number">20</span> <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off"><span>Set heating mode to OFF</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>0</code> which means <code>not set</code>. <code>occupied_heating_setpoint</code> automatically changes to <code>1</code> degree C.</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-schedule" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-schedule"><span>Set heating mode to SCHEDULE</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: This will revert any deviation of <code>occupied_heating_setpoint</code> previously set to what is defined in the schedule of the thermostat.</p><p>This will also stop any native boosts that are currently active.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',22)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[14]||(t[14]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[20]||(t[20]=(0,a.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary"><span>Temperature setpoint hold (binary)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric"><span>Temperature setpoint hold duration (numeric)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p>',9))])}]]),i=JSON.parse('{"path":"/devices/SLR1b.html","title":"Hive SLR1b control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLR1b control via MQTT","description":"Integrate your Hive SLR1b via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-04T20:38:05.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"How to start/edit native boost","slug":"how-to-start-edit-native-boost","link":"#how-to-start-edit-native-boost","children":[]},{"level":3,"title":"Set heating mode to MANUAL","slug":"set-heating-mode-to-manual","link":"#set-heating-mode-to-manual","children":[]},{"level":3,"title":"Set heating mode to OFF","slug":"set-heating-mode-to-off","link":"#set-heating-mode-to-off","children":[]},{"level":3,"title":"Set heating mode to SCHEDULE","slug":"set-heating-mode-to-schedule","link":"#set-heating-mode-to-schedule","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Temperature setpoint hold (binary)","slug":"temperature-setpoint-hold-binary","link":"#temperature-setpoint-hold-binary","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric)","slug":"temperature-setpoint-hold-duration-numeric","link":"#temperature-setpoint-hold-duration-numeric","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/SLR1b.md"}')}}]);