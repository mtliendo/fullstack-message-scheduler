import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SectionItem from '@/components/SectionItem'
import BubbleBackground from '@/components/bubble.svg'
import sectionBackground from '@/components/section.svg'
import bottomSectionBackground from '@/components/bottomSection.svg'

export default function Home() {
	return (
		<>
			<div
				className="bg-cover"
				style={{ backgroundImage: `url(${BubbleBackground.src})` }}
			>
				<Navbar />
				<Hero />
			</div>
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${sectionBackground.src})`,
					aspectRatio: '900/100',
				}}
			></div>
			<main>
				<h1 className="text-center text-5xl mb-6">
					A bit about this project 👀
				</h1>
				<div className="flex justify-start">
					<SectionItem
						title="New album is released!"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					asperiores incidunt quas aspernatur, recusandae magnam odit nostrum
					necessitatibus similique laborum iste sunt, vero doloremque obcaecati
					corporis dolores? Quam, soluta praesentium!"
						img="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
						btnText="Listen"
					/>
				</div>
				<div className="flex justify-end">
					<SectionItem
						title="New album is released!"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					asperiores incidunt quas aspernatur, recusandae magnam odit nostrum
					necessitatibus similique laborum iste sunt, vero doloremque obcaecati
					corporis dolores? Quam, soluta praesentium!"
						img="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
						btnText="Listen"
					/>
				</div>
				<div
					className="bg-cover"
					style={{
						backgroundImage: `url(${bottomSectionBackground.src})`,
						aspectRatio: '900/100',
					}}
				></div>
			</main>
			<Footer />
		</>
	)
}
