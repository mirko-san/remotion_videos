import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={120}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
