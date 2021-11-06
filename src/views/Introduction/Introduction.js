import React from 'react';
import Rellax from 'rellax';

import Loading from '../../assets/png/loading.png'

import './Introduction.css'

const Introduction = ({
	id,
	...props
}) => {

	const articleRef = React.useRef();

	const [dimensions, setDimensions] = React.useState();
	const [imgLoaded, setImgLoaded] = React.useState(false);

	React.useEffect(() => {
		setDimensions({
			x: articleRef.current.offsetWidth,
			y: articleRef.current.offsetHeight
		})

		new Rellax('#header')
	}, [])

	return (
		<section
			style={{
				height: '100vh',
			}}
		>
			<div
				ref={articleRef}
				style={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					zIndex: 20,
				}}
			>
				{dimensions && (
					<img 
						onLoad={() => setImgLoaded(true)} 
						src={`https://picsum.photos/${dimensions.x}/${dimensions.y}?grayscale`}
					/>
				)}
				{!imgLoaded && (
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							background: 'white',
							display: 'flex',
							zIndex: 100
						}}
					>
						<img
							style={{
								margin: 'auto',
								animation: 'rotation 2s infinite linear'
							}}
							src={Loading} 
						/>
					</div>
				)}
				<h1 id="header">
					Berk Sevgi
					<span>
						Software Engineer
					</span>
				</h1>
			</div>
		</section>
	)
}

export default Introduction;