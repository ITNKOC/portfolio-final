"use client";

import LanguageSwitcherToggle from "./LanguageSwitcherToggle";
import LanguageSwitcherDropdown from "./LanguageSwitcherDropdown";
import LanguageSwitcherTabs from "./LanguageSwitcherTabs";
import { motion } from "framer-motion";

const LanguageSwitcherShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Choisissez Votre Switcher 🎨
        </motion.h1>
        <motion.p
          className="text-gray-400 text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          3 designs ultra-premium pour votre portfolio
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Option 1: Toggle */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700 hover:border-nbc-red transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Option 1</h2>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                RECOMMANDÉ ⭐
              </span>
            </div>

            <div className="flex items-center justify-center py-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mb-6">
              <LanguageSwitcherToggle />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Toggle Switch Élégant</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-nbc-red dark:text-sky-400">✓</span>
                <span>Design compact et moderne</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nbc-red dark:text-sky-400">✓</span>
                <span>Animations fluides et sophistiquées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nbc-red dark:text-sky-400">✓</span>
                <span>Glassmorphism premium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nbc-red">✓</span>
                <span>Tooltip informatif au hover</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nbc-red">✓</span>
                <span>Parfait pour navbar</span>
              </li>
            </ul>
          </motion.div>

          {/* Option 2: Dropdown */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700 hover:border-purple-500 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Option 2</h2>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full border border-purple-500/30">
                ÉLÉGANT
              </span>
            </div>

            <div className="flex items-center justify-center py-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mb-6">
              <LanguageSwitcherDropdown />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Dropdown Sophistiqué</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span>
                <span>Menu déroulant interactif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span>
                <span>Affichage complet des langues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span>
                <span>Check indicator animé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span>
                <span>Effets hover premium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✓</span>
                <span>Extensible (3+ langues)</span>
              </li>
            </ul>
          </motion.div>

          {/* Option 3: Tabs */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-700 hover:border-blue-500 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Option 3</h2>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                MODERNE
              </span>
            </div>

            <div className="flex items-center justify-center py-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mb-6">
              <LanguageSwitcherTabs />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Tabs Modernes</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✓</span>
                <span>Indicateur glissant animé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✓</span>
                <span>Design ultra-moderne</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✓</span>
                <span>Dot indicator actif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✓</span>
                <span>Transitions spring fluides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✓</span>
                <span>Style iOS/Material</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-nbc-red/10 to-purple-500/10 border-2 border-nbc-red/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Comment choisir ?</h3>
          <p className="text-gray-300 mb-6">
            Testez chaque switcher ci-dessus et dites-moi lequel vous préférez!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-gray-800 rounded-xl text-white font-semibold">
              Option 1: Compact & Élégant
            </div>
            <div className="px-6 py-3 bg-gray-800 rounded-xl text-white font-semibold">
              Option 2: Détaillé & Sophistiqué
            </div>
            <div className="px-6 py-3 bg-gray-800 rounded-xl text-white font-semibold">
              Option 3: Moderne & Dynamique
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageSwitcherShowcase;
