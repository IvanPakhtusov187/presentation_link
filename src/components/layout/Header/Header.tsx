import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data';
import { assetUrl } from '@/shared/lib/assetUrl';
import { scrollToSection } from '@/shared/lib/scrollTo';
import styles from './Header.module.scss';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          aria-label="На главную — Иван Пахтусов"
        >
          <img
            src={assetUrl('logo.png')}
            alt=""
            className={styles.logoImage}
            width={40}
            height={40}
            decoding="async"
          />
          <span className={styles.logoText}>Frontend Developer</span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileList}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
