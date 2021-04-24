import React from 'react'
import Link from "next/link";

export function Navbar(props) {
	return (
		<div className='siteNavbar'>
			<input type='checkbox' className='hamburger_toggler' />
			<div className='hamburger'>
				<div></div>
				<span>Меню</span>
			</div>
			<div className='menu_logo__mobile'>
				<Link href="/">
					<a>
						<img src='/images/logo.svg' loading="lazy" />
					</a>
				</Link>
			</div>
			<div className='menu_logo__mobile menu_logo__mobile__white'>
				<Link href="/">
				<a>
					<img src='/images/logo_white.svg' loading="lazy" />
				</a>
				</Link>
			</div>
			<div className='menu'>
				<div className='siteNavbar_line2'>
					<div className='siteNavbar_content'>
						<div className='siteNavbar_contentHeader'>
							<div className='siteNavbar_logo'>
								<Link href="/">
								<a>
									<img src='/images/logo.svg' loading="lazy" />
								</a>
								</Link>
							</div>
						</div>
						<div className='siteNavbar_contentMenu'>
							{/*<SiteNav className='mg_b_4x'>*/}
							{/*	<SiteNav_item>*/}
							{/*		<NavTo href='/about' nav>*/}
							{/*			О компании*/}
							{/*		</NavTo>*/}
							{/*	</SiteNav_item>*/}
							{/*	<SiteNav_item>*/}
							{/*		<NavTo href='/news' nav>*/}
							{/*			Новости*/}
							{/*		</NavTo>*/}
							{/*	</SiteNav_item>*/}
							{/*	<SiteNav_item>*/}
							{/*		<NavTo href='/contacts' nav>*/}
							{/*			Контакты*/}
							{/*		</NavTo>*/}
							{/*	</SiteNav_item>*/}
							{/*	<SiteNav_item>*/}
							{/*		<NavTo href='/account' nav>*/}
							{/*			Личный кабинет*/}
							{/*		</NavTo>*/}
							{/*	</SiteNav_item>*/}
							{/*</SiteNav>*/}
						</div>
					</div>
				</div>
			</div>
			<div className='mobile_navbarHolder' />
		</div>
	)
}
