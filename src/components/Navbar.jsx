import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'About', href: '#about' },
		{ name: 'Contact', href: '#contact' },
	];

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			role="navigation"
			aria-label="Primary"
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/80 dark:bg-dark-800/80 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-2xl font-bold text-primary-600"
					>
						Ahmed Rabea
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<motion.button
								key={item.name}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => scrollToSection(item.href)}
								className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
							>
								{item.name}
							</motion.button>
						))}
					</div>

					{/* Dark Mode Toggle & Mobile Menu Button */}
					<div className="flex items-center space-x-4">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={toggleDarkMode}
							className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
							aria-label="Toggle dark mode"
						>
							{darkMode ? <Sun size={20} /> : <Moon size={20} />}
						</motion.button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
							aria-label="Toggle menu"
							aria-expanded={isOpen}
							aria-controls="mobile-menu"
						>
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700"
							id="mobile-menu"
						>
							<div className="px-4 py-4 space-y-4">
								{navItems.map((item) => (
									<motion.button
										key={item.name}
										whileHover={{ x: 10 }}
										onClick={() => scrollToSection(item.href)}
										className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium py-2"
									>
										{item.name}
									</motion.button>) )}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navbar;


