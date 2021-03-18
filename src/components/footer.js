import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './header.css'

const Footer = () => {
    return (
        <footer class="footerCom">
            <div class="container">
                <div class="columns content">
                    <div class="column is-one-thirds">
                        <div class="is-size-6 colorE0 marbott"><span> 关于我们</span></div>
                        <div class="is-size-6"><span> 中科驭数（北京）科技有限公司</span></div>
                        <div class="is-size-6"><span> YUSUR Technology Co., Ltd.</span></div>
                        <div class="social-links-container">
                            <a target="_blank" href="https://www.zhihu.com/org/zhong-ke-yu-shu/activities"
                               class="fa social colorE0" style={{marginRight: `.5em`}}>
                                <svg t="1574154152557"
                                     viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     p-id="1837"
                                     width="1rem" height="1rem">
                                    <path
                                        d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z"
                                        fill="#ffffff" p-id="1838"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/yusur/"
                               class="fa fa-linkedin social colorE0" style={{marginRight: `.5em`}}> </a>
                            <sv t="1574154152557" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1837" width="1rem" height="1rem">
                                <path
                                    d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z"
                                    fill="#ffffff" p-id="1838"></path>
                            </sv>
                        <a target="_blank" href="https://mp.weixin.qq.com/s/YDX-T96_htxOPglNHmH23g"
                           class="fa fa-wechat social colorE0"> <img
                            src="../common_component/img/qrcode/wx_yusur.jpg" alt="中科驭数微信"
                            class="qrcode is-hidden-mobile"/> </a>
                    </div>
                </div>
                <div class="column is-one-thirds">
                    <div class="is-size-6 colorE0 marbott"><span> 商务合作</span></div>
                    <div class="is-size-6"><span> 商务合作:</span> <span> &nbsp;</span>
                        <a href="mailto:partner@yusur.tech" class="email" tittle="mailto:partner@yusur.tech">
                            partner@yusur.tech</a>
                    </div>
                    <div class="is-size-6"><span> 加入我们:</span> <span> &nbsp;</span>
                        <a href="mailto:talent@yusur.tech" class="email" tittle="mailto:talent@yusur.tech">
                            talent@yusur.tech</a>
                    </div>
                </div>
                <div class="column is-one-thirds">
                    <div class="is-size-6 colorE0 marbott"><span> 联系我们</span></div>
                    <div class="is-size-6"><span> 地址: 北京市海淀区中关村壹号A2座901</span></div>
                    <div class="is-size-6"><span> 电话: 010-60609250</span></div>
                </div>
            </div>
            <div class="has-text-centered is-size-6"> © <span id="copyright">
						<script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
					</span> Yusur Tech. All Rights Reserved.
                <a rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank"> 京ICP备18041345号 </a>
            </div>
        </div>
</footer>
)
}

export default Footer;
