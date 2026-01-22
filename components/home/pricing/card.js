'use client';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function TeamCard({ member = {} }) {
	return (
		<div className="w-full min-h-96 px-5 py-10 border-2 border-base-content rounded-xl flex flex-col items-center gap-4 transition-all duration-200 shadow-none hover:shadow-2xl bg-base-100">
			
	

			<Image
														src={member.image || '/placeholder.jpg'}
				alt={member.name}
				className="w-32 h-32 rounded-full object-cover border-2 border-base-content"
									></Image>

			{/* Name */}
			<h2 className="text-xl font-bold text-center">
				{member.name}
			</h2>

			{/* Position */}
			<p className="text-center text-sm opacity-80">
				{member.position}
			</p>

			{/* About / Short Bio */}
			{member.description && (
				<p className="text-center text-sm mt-2">
					{member.description}
				</p>
			)}

			{/* Social Links */}
			<div className="flex gap-4 mt-4">
				{member.linkedin && (
					<a
						href={member.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-xl hover:text-primary transition"
					>
						<FaLinkedin />
					</a>
				)}

				{member.instagram && (
					<a
						href={member.instagram}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="text-xl hover:text-primary transition"
					>
						<FaInstagram />
					</a>
				)}

				{member.contact && (
					<a
						href={`mailto:${member.contact}`}
						aria-label="Contact"
						className="text-xl hover:text-primary transition"
					>
						<FaEnvelope />
					</a>
				)}
			</div>
		</div>
	);
}
