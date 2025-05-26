import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: 100%;
	max-width: 100%;
	padding: 1.5rem 0 2rem;
	margin: 0;
	box-sizing: border-box;
	background: ${props => props.theme.colors.background2};
	border-top: 1px solid ${props => props.theme.colors.border};

	@media ${props => props.theme.breakpoints.sm} {
		padding: 1rem 0 2rem;
	}
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 12px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
	width: 100%;
	max-width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 48px;
	margin-top: 1.5rem;

	@media ${props => props.theme.breakpoints.md} {
		padding: 0 24px;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		padding: 0 16px;
	}
`

export const CompanyContainer = styled.div`
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	margin-right: auto;

	@media ${props => props.theme.breakpoints.md} {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	@media ${props => props.theme.breakpoints.sm} {
		margin: 0 0 32px;
	}
`

export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media ${props => props.theme.breakpoints.md} {
		justify-content: center;
	}
`

export const LinkList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
	padding: 40px 48px 28px;
	margin: 0;
	list-style: none;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 48px 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		padding: 32px 24px 16px;
		gap: 16px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		padding: 32px 16px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`

export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
