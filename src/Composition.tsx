import { AbsoluteFill } from 'remotion';

import { Icon } from './Icon';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-[#00ff00] items-center justify-center">
			<div className="max-h-[60%]">
				<Icon />
			</div>
		</AbsoluteFill>
	);
};
