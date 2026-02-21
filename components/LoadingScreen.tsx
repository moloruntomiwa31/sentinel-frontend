import Image from 'next/image'

export default function LoadingScreen() {
	return (
		<div className="min-h-screen bg-gray-900 flex items-center justify-center">
			<div className="text-center">
				<div className="flex items-center justify-center mb-6">
					<Image
						src="/images/app-logo.png"
						width={80}
						height={80}
						alt="App Logo"
					/>
				</div>
				<h2 className="text-2xl font-bold text-white mb-2">Sentinel AI</h2>
				<p className="text-gray-400 mb-6">
					Initializing patient monitoring system...
				</p>
				<div className="flex justify-center">
					<div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				</div>
			</div>
		</div>
	);
}
