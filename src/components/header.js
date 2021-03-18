import React , { Component } from 'react';
import {useState } from 'react';
import ReactDOM from 'react-dom';
import './header.css'

const Header = () => {
    const [isTop, setIsTop] = useState(true);
    return(
        <header>
        <div className="yusur-fa navbar fixed" style={{zIndex: 1000}}>
            <nav className="navbar is-dark">
                <div className="flex-content ">
                    <div className="navbar-brand">
                        <a href="../index.html" className="navbar-item" style={{padding: `.5rem 1rem!important`}}>
                            <img alt="中科驭数logo" src="../common_component/img/logo/text_logo_dark.png"/>
                        </a>
                        <button className="button navbar-burger is-dark">
                            <span> </span> <span> </span> <span> </span>
                        </button>
                    </div>
                    <div className="navbar-menu">
                        <div className="has-text-centered flex-box navbar-end">
                            <div className="navbar-li navbar-item sup_navbar_item">
                                <a href="../product/index.html" className="navbar-item" id="product"
                                   title="Product Center">
                                    产品中心</a>
                                <div className="solution-div" style={{left: `0%`, width:` 670px`, maxWidth:`unset`}}>
                                    <div className="columns is-gapless">
                                        <div className="column">
                                            <ul>
                                                <li style={{borderBottom:` 2px solid`}}>
                                                    <a href="../product/index.html#ip"
                                                       className="subtitle hvr-shadow">硬件IP核</a>
                                                </li>

                                                <li style={{margin:` 0 1rem`}}>
                                                    <a href="../product/s-tcp.html" className="">SWIFT-IP1900T</a>
                                                </li>
                                                <li style={{margin:` 0 1rem`}}>
                                                    <a href="../product/s-udp.html" className="">SWIFT-IP1900U</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <ul>
                                                <li style={{borderBottom: `2px solid`}}>
                                                    <a href="../product/index.html#application"
                                                       className="subtitle hvr-shadow">落地应用</a>
                                                </li>

                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/toe.html" className="">网络加速</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/doe.html" className="">硬件数据库加速</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/2000M.html" className="">硬件存储加速</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/2000QB.html" className="">行情加速</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/riskcop.html" className="">极速风控系统</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <ul>
                                                <li style={{borderBottom:`2px solid`}}>
                                                    <a href="../product/index.html#device"
                                                       className="subtitle hvr-shadow">芯片和板卡</a>
                                                </li>

                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/conflux.html" className="">Conflux</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/swift.html" className="">Swift</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <ul>
                                                <li style={{borderBottom:`2px solid`}}>
                                                    <a href="../product/index.html#whitepaper"
                                                       className="subtitle hvr-shadow">
                                                        白皮书下载</a>
                                                </li>

                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/whitepaper.html#wp1" className="">特色白皮书</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/whitepaper.html#wp2" className="">白皮书（精简版）</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/whitepaper.html#wp3" className="">KPU™ 产品白皮书</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/whitepaper.html#wp4" className="">KOS™ 产品白皮书</a>
                                                </li>
                                                <li style={{margin: `0 1rem`}}>
                                                    <a href="../product/whitepaper.html#wp5" className="">KLIB™
                                                        产品白皮书</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="../technology/index.html" className="navbar-item" id="technology" title="技术">
                                核心技术</a>
                            <li className="navbar-li navbar-item sup_navbar_item">
                                <a href="../solution/index.html" className="navbar-item" id="solution" title="方案">
                                    解决方案</a>
                                <div className="solution-div" style={{left: `-55%`}}>
                                </div>
                            </li>
                            <a href="../resources/index.html" className="navbar-item" id="resources" title="新闻">
                                新闻资讯</a>
                            <li className="navbar-li navbar-item sup_navbar_item">
                                <a href="../about/index.html" className="navbar-item" id="about" title="关于我们">
                                    关于我们</a>
                                <div className="solution-div" style={{left: `-55%`}}>
                                    <ul className="scroll_to_id">
                                        <li>
                                            <a href="../about/index.html#yusur-achievement">科技奖励</a>
                                        </li>
                                        <li>
                                            <a href="../about/index.html#yusur-customerCases">合作伙伴</a>
                                        </li>
                                        <li>
                                            <a href="../joinus/index.html">加入我们</a>
                                        </li>
                                        <li>
                                            <a href="../about/index.html#yusur-contactUs">联系我们</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="navbar-li navbar-item sup_navbar_item">
                                <a href="../joinus/index.html" className="navbar-item" id="joinus" title="加入我们">
                                    加入我们</a>
                                <div className="solution-div" style={{left: `-53%`}}>
                                    <ul className="scroll_to_id">
                                        <li>
                                            <a href="../joinus/socialrecruitment.html">社会招聘</a>
                                        </li>
                                        <li>
                                            <a href="../joinus/campus.html">校园招聘</a>
                                        </li>
                                        <li>
                                            <a href="../joinus/intern.html">实习生招聘</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <a href="javascript:" onClick="$('#business-consult-form').addClass('is-active')"
                               className="navbar-item"
                               id="consult" title="Consult">
                                业务咨询</a>
                            <a href="javascript:"
                               onClick="window.location=window.location.href.replace(new RegExp(/\/zh\//), '/en/')"
                               className="navbar-item change-lang" title="to English">English</a>
                            <li className="navbar-li navbar-item sup_navbar_item change-lang">
                                <a className="navbar-item" id="chg-lang" title="切换语言">
                                    <i className="fa fa-language fa-2x"></i>
                                </a>
                                <div className="solution-div" style={{left: `-120%`}}>
                                    <ul className="scroll_to_id">
                                        <li>
                                            <a href="javascript:"
                                               onClick="window.location=window.location.href.replace(new RegExp(/\/zh\//), '/en/')"
                                               title="to English">English</a>
                                        </li>
                                        <li>
                                            <a href="javascript:"
                                               onClick="window.location=window.location.href.replace(new RegExp(/\/en\//), '/zh/')"
                                               title="切换到中文">中文</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="business-consult">
            <form method="POST" id="business-consult-form" className="modal is-clipped" style={{zIndex: `9999`}}>
                <div className="modal-background"></div>
                <div className="modal-content modal-card card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-centered has-text-white">
                            业务咨询
                        </p>
                        <button type="button" className="delete close-consult-form" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">您的公司</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="company" className="input is-info" type="text" placeholder="请输入公司名称"
                                       value=""/>
                                <span className="icon is-small is-left">
                <i className="fa fa-building"></i>
              </span>
                                <span className="icon is-small is-right">
                <i className="fa  is-hidden"></i>
              </span>
                            </div>
                            <p className="help  is-hidden">公司名称不可空缺</p>
                        </div>

                        <div className="field">
                            <label className="label">您的姓名</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="username" className="input is-info" type="text" placeholder="请输入您的姓名"
                                       value=""/>
                                <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
                                <span className="icon is-small is-right">
                <i className="fa  is-hidden"></i>
              </span>
                            </div>
                            <p className="help is-hidden">姓名不可为空</p>
                        </div>

                        <div className="field">
                            <label className="label">您的电话</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="telephone" className="input  is-info" type="tel" placeholder="请输入您的电话"
                                       value=""/>
                                <span className="icon is-small is-left">
                <i className="fa fa-phone"></i>
              </span>
                                <span className="icon is-small is-right">
                <i className="fa  is-hidden"></i>
              </span>
                            </div>
                            <p className="help  is-hidden">无效电话号码</p>
                        </div>

                        <div className="field">
                            <label className="label">您的邮箱</label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="mail" className="input is-info" type="email" placeholder="请输入您的邮箱"
                                       value=""/>
                                <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
                                <span className="icon is-small is-right">
                <i className="fa  is-hidden"></i>
              </span>
                            </div>
                            <p className="help  is-hidden">无效邮箱地址</p>
                        </div>

                        <div className="field">
                            <label className="label">您的行业</label>
                            <div className="control">
                                <div className="select">
                                    <select name="industry">
                                        <option value="广告传媒">广告传媒</option>
                                        <option value="能源">能源</option>
                                        <option value="金融服务">金融服务</option>
                                        <option value="政府部门">政府部门</option>
                                        <option value="医药行业">医药行业</option>
                                        <option value="IT">IT</option>
                                        <option value="物流">物流</option>
                                        <option value="燃气燃油">燃气燃油</option>
                                        <option value="零售">零售</option>
                                        <option value="通信">通信</option>
                                        <option value="社会工作">社会工作</option>
                                        <option value="Other">其他</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field other-industry is-hidden">
                            <div className="control has-icons-left has-icons-right">
                                <input name="other-industry" className="input is-info" type="text" placeholder="请输入您的行业"
                                       value=""/>
                                <span className="icon is-small is-left">
                <i className="fa fa-industry"></i>
              </span>
                                <span className="icon is-small is-right">
                <i className="fa  is-hidden"></i>
              </span>
                            </div>
                            <p className="help is-hidden">行业名称不可空缺</p>
                        </div>

                        <div className="field">
                            <label className="label">咨询内容</label>
                            <div className="control">
                            <textarea name="content" className="textarea is-info" type="content"
                                      placeholder="请输入咨询内容"></textarea>
                            </div>
                            <p className="help  is-hidden">至少十个字符</p>
                        </div>
                    </section>
                    <footer className="modal-card-foot" style={{justifyContent: `flex-end`}}>
                        <div className="field  is-grouped is-grouped-right">
                            <div className="control">
                                <input type="submit" className="button is-primary" value="提交"/>
                            </div>
                            <div className="control">
                                <button type="button" className="button is-link is-light close-consult-form">
                                    取消
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
                <button type="button" className="modal-close is-large is-hidden-mobile close-consult-form"
                        aria-label="close"></button>
            </form>
            <div id="consult-result" className="modal is-clipped" style={{zIndex: `9999`}}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="notification has-text-centered is-size-5">
                        <button className="delete close-consult-result"></button>
                        <span className="send-success">发送成功，感谢您的咨询！</span>
                        <span className="send-fail">发送失败，请稍后重试</span>
                    </div>
                </div>
                <button className="modal-close is-large is-hidden-mobile close-consult-result"
                        aria-label="close"></button>
            </div>
        </div>
    </header>
    )
}

export default Header;
