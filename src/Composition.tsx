import { AbsoluteFill } from 'remotion';

import { Icon } from './Icon';
import { Text } from './Text';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-[#00ff00] items-center justify-center">
			<Icon />
			<Text />
		</AbsoluteFill>
	);
};
