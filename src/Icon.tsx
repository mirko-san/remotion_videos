import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { AbsoluteFill, Img, staticFile } from "remotion";

export const Icon: React.FC = () => {
	const frame = useCurrentFrame();

	const transform = interpolate(frame, [0, 360], [0, 360]);

	return (
		<Img
			src={staticFile("/logo.png")}
			style={{ transform: `rotateY(${transform}deg)` }}
			className="object-cover max-h-[100%]"
		/>
	);
};
