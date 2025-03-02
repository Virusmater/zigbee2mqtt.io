"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48073],{61093:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>o});var r=a(6254);const t=a.p+"assets/img/conbee.f79aa5fb.jpg",i={class:"hint-container warning"},s={},l=(0,a(52753).A)(s,[["render",function(e,n){const a=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[n[19]||(n[19]=(0,r.Lk)("h1",{id:"deconz-dresden-elektronik",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#deconz-dresden-elektronik"},[(0,r.Lk)("span",null,"deCONZ (Dresden Elektronik)")])],-1)),(0,r.Lk)("div",i,[n[10]||(n[10]=(0,r.Lk)("p",{class:"hint-container-title"},"ATTENTION",-1)),n[11]||(n[11]=(0,r.Lk)("p",null,"Various features are not supported by this adapter, in case you depend on these features, consider a different adapter.",-1)),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(a,{to:"/guide/configuration/zigbee-network.html#changing-the-zigbee-channel"},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.eW)("Changing the channel")]))),_:1}),n[1]||(n[1]=(0,r.eW)(", changing requires re-pairing all devices."))]),(0,r.Lk)("li",null,[n[3]||(n[3]=(0,r.eW)("Adding ")),(0,r.bF)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd"},{default:(0,r.k6)((()=>n[2]||(n[2]=[(0,r.eW)("install codes")]))),_:1}),n[4]||(n[4]=(0,r.eW)(", which is required to pair some devices."))]),(0,r.Lk)("li",null,[(0,r.bF)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestbackup"},{default:(0,r.k6)((()=>n[5]||(n[5]=[(0,r.eW)("Backups")]))),_:1})]),(0,r.Lk)("li",null,[n[7]||(n[7]=(0,r.eW)("Inter-PAN, which is required for ")),(0,r.bF)(a,{to:"/guide/usage/touchlink.html"},{default:(0,r.k6)((()=>n[6]||(n[6]=[(0,r.eW)("touchlink")]))),_:1})]),(0,r.Lk)("li",null,[n[9]||(n[9]=(0,r.eW)("Changing the ")),(0,r.bF)(a,{to:"/guide/configuration/adapter-settings.html"},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.eW)("transmit power")]))),_:1})])])]),n[20]||(n[20]=(0,r.Fv)('<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> deconz</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',2)),(0,r.Lk)("p",null,[n[13]||(n[13]=(0,r.eW)("Other supported settings are: ")),n[14]||(n[14]=(0,r.Lk)("code",null,"adapter_concurrent",-1)),n[15]||(n[15]=(0,r.eW)(" and ")),n[16]||(n[16]=(0,r.Lk)("code",null,"adapter_delay",-1)),n[17]||(n[17]=(0,r.eW)(" (")),(0,r.bF)(a,{to:"/guide/configuration/adapter-settings.html"},{default:(0,r.k6)((()=>n[12]||(n[12]=[(0,r.eW)("docs")]))),_:1}),n[18]||(n[18]=(0,r.eW)(")."))]),n[21]||(n[21]=(0,r.Fv)('<h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware"><span>Hardware</span></a></h2><p>ConBee / ConBee II / ConBee III / RaspBee / RaspBee II</p><p>USB connected adapters (ConBee / ConBee II / ConBee III) and Raspberry Pi GPIO modules (RaspBee and RaspBee II).</p><p>Add the correct baudrate to the <code>configuration.yaml</code> into the serial section.</p><ul><li>For ConBee2: specifying the baudrate is not necessary</li><li>For RaspBee2 it is 38400</li><li>For ConBee3 it is 115200</li></ul><p><strong>Warning:</strong> Conbee 2 firmware versions newer than 0x26580700 will result in an unstable network with devices dropping randomly, see <a href="https://github.com/Koenkk/zigbee2mqtt/issues/9554" target="_blank" rel="noopener noreferrer">Issue 9554</a></p><ul><li><a href="https://deconz.dresden-elektronik.de/deconz-firmware/" target="_blank" rel="noopener noreferrer">Coordinator firmware</a></li><li><a href="https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually" target="_blank" rel="noopener noreferrer">Flashing</a></li><li><a href="https://phoscon.de/conbee2#buy" target="_blank" rel="noopener noreferrer">Buy</a> (ConBee II)</li><li><a href="https://phoscon.de/conbee3#buy" target="_blank" rel="noopener noreferrer">Buy</a> (ConBee III)</li><li><a href="https://phoscon.de/raspbee2#buy" target="_blank" rel="noopener noreferrer">Buy</a> (RaspBee II)</li></ul><img src="'+t+'" width="200">',8))])}]]),o=JSON.parse('{"path":"/guide/adapters/deconz.html","title":"deCONZ (Dresden Elektronik)","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]}],"git":{"updatedTime":1740949400000},"filePathRelative":"guide/adapters/deconz.md"}')}}]);