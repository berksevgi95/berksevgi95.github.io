import React from 'react';
import Rellax from 'rellax';

const Introduction = ({
	id,
	...props
}) => {

	const articleRef = React.useRef();

	const [dimensions, setDimensions] = React.useState();

	React.useEffect(() => {
		setDimensions({
			x: articleRef.current.offsetWidth,
			y: articleRef.current.offsetHeight
		})

		new Rellax('#aaa')
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
					<img src={`https://picsum.photos/${dimensions.x}/${dimensions.y}?grayscale`}/>
				)}

				<h1
					id="aaa"
					style={{
						position: 'absolute',
						bottom: 0,
						padding: 75,
						color: '#ffffff',
						fontSize: 100,
						margin: 0,
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					Berk Sevgi
					<span
						style={{
							fontSize: 20,
							marginLeft: 5
						}}
					>
						Software Engineer
					</span>
				</h1>
			</div>
		</section>
	)
}

export default Introduction;