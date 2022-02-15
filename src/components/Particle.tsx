import Particles from 'react-tsparticles';

export function Particle() {
	return (
		<div>
			<Particles
				id='tsparticles'
				options={{
					fpsLimit: 144,
					fullScreen: {
						enable: true,
						zIndex: -1,
					},
					particles: {
						links: {
							color: '#454545',
							distance: 125,
							enable: true,
							opacity: 0.75,
							width: 1.25,
						},
						move: {
							enable: true,
							outMode: 'bounce',
							speed: 0.9,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						color: {
							value: ['#ff1100', '#ff7300', '#ffee00', '#00ff4c', '#003cff', '#5d00ff', '#ea00ff'],
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: 3,
							random: true,
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		</div>
	);
}
