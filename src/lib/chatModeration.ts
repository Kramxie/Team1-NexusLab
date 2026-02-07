/**
 * Chat Moderation System
 * Handles bad word detection, strike tracking, and lockout management
 */

// Comprehensive list of inappropriate words/patterns (censored for privacy)
const BAD_WORDS_PATTERNS: RegExp[] = [
  // Profanity (English)
  /\b(f+u+c+k+|f+[@*]+c+k+|fck|fuk|fvck|phuck|ph[@*]ck)\w*/i,
  /\b(s+h+i+t+|sh[@*]+t|sht|sh1t)\w*/i,
  /\b(a+s+s+h+o+l+e+|a+s+s+|@ss|a+\$\$)\w*/i,
  /\b(b+i+t+c+h+|b[@*]+tch|b1tch)\w*/i,
  /\b(d+a+m+n+|d[@*]mn)\w*/i,
  /\b(c+u+n+t+|c[@*]nt)\w*/i,
  /\b(d+i+c+k+|d[@*]ck|d1ck)\w*/i,
  /\b(p+u+s+s+y+|p[@*]ssy)\w*/i,
  /\b(c+o+c+k+|c[@*]ck)\w*/i,
  /\b(b+a+s+t+a+r+d+)\w*/i,
  /\b(w+h+o+r+e+|h+o+e+)\w*/i,
  /\b(s+l+u+t+)\w*/i,
  /\b(p+r+i+c+k+)\w*/i,
  /\b(t+w+a+t+)\w*/i,
  /\b(w+a+n+k+e*r*)\w*/i,
  /\b(b+o+l+l+o+c+k+s*)\w*/i,
  /\b(a+r+s+e+)\w*/i,
  /\b(c+r+a+p+)\w*/i,
  
  // Slurs and hate speech (will not enumerate, using patterns)
  /\b(n+[i1]+g+[g@]+[e3a]+r*s*|n+[i1]+g+g+[@a]+)\w*/i,
  /\b(f+[@a]+g+[g@]*o*t*s*)\w*/i,
  /\b(r+e+t+a+r+d+)\w*/i,
  /\b(t+r+a+n+n+y+)\w*/i,
  /\b(c+h+i+n+k+)\w*/i,
  /\b(s+p+i+c+|s+p+i+k+)\w*/i,
  /\b(k+i+k+e+)\w*/i,
  /\b(g+o+o+k+)\w*/i,
  /\b(w+e+t+b+a+c+k+)\w*/i,
  /\b(b+e+a+n+e+r+)\w*/i,
  /\b(c+o+o+n+)\w*/i,
  
  // Sexual content
  /\b(p+o+r+n+|p+[@*]+r+n+)\w*/i,
  /\b(s+e+x+|s+3+x+)\w*/i,
  /\b(n+u+d+e+s*)\w*/i,
  /\b(h+e+n+t+a+i+)\w*/i,
  /\b(b+o+o+b+s*|t+i+t+s*)\w*/i,
  /\b(p+e+n+i+s+)\w*/i,
  /\b(v+a+g+i+n+a+)\w*/i,
  /\b(b+l+o+w+j+o+b+)\w*/i,
  /\b(h+a+n+d+j+o+b+)\w*/i,
  /\b(o+r+g+a+s+m+)\w*/i,
  /\b(m+a+s+t+u+r+b+a+t+)\w*/i,
  /\b(e+j+a+c+u+l+a+t+)\w*/i,
  /\b(c+u+m+m*i*n*g*|c+u+m+s*h+o+t*)\w*/i,
  /\b(f+a+p+p*i*n*g*)\w*/i,
  
  // Violence/threats
  /\b(k+i+l+l+\s*(you|u|yourself|urself))\w*/i,
  /\b(d+i+e+\s*(you|u))\w*/i,
  /\b(m+u+r+d+e+r+)\w*/i,
  /\b(s+u+i+c+i+d+e+)\w*/i,
  /\b(r+a+p+e+d*)\w*/i,
  /\b(t+e+r+r+o+r+i+s+[tm])\w*/i,
  /\b(b+o+m+b+\s*(you|threat))\w*/i,
  
  // Drugs
  /\b(c+o+c+a+i+n+e+)\w*/i,
  /\b(h+e+r+o+i+n+)\w*/i,
  /\b(m+e+t+h+a*m*p*h*e*t*a*m*i*n*e*)\w*/i,
  /\b(c+r+a+c+k+\s*c+o+c+a+i+n+e+)\w*/i,
  
  // Filipino profanity
  /\b(p+u+t+a+n+g*\s*i+n+a+|p+t+a+n+g*\s*i+n+a+|p+u+t+a+|p+t+a+)\w*/i,
  /\b(g+a+g+o+|g+a+g+i+)\w*/i,
  /\b(b+o+b+o+|t+a+n+g+a+|t+a+n+g+i+n+a+)\w*/i,
  /\b(l+e+c+h+e+)\w*/i,
  /\b(u+l+o+l+)\w*/i,
  /\b(t+a+r+a+n+t+a+d+o+)\w*/i,
  /\b(p+a+k+y+u+|p+a+k+e+n+y+u+)\w*/i,
  /\b(p+u+n+y+e+t+a+)\w*/i,
  /\b(k+u+p+a+l+)\w*/i,
  /\b(h+i+n+a+y+u+p+a+k+)\w*/i,
  /\b(b+w+i+s+i+t+)\w*/i,
  /\b(l+i+n+t+i+k+)\w*/i,
  /\b(s+u+s+m+a+r+y+o+s+e+p+)\w*/i,
  
  // Illegal activities
  /\b(h+a+c+k+\s*(you|this|me|account))\w*/i,
  /\b(s+c+a+m+m*e*r*)\w*/i,
  /\b(p+h+i+s+h+i+n+g+)\w*/i,
  /\b(i+l+l+e+g+a+l+)\w*/i,
  /\b(g+a+m+b+l+i+n+g+)\w*/i,
  /\b(c+a+s+i+n+o+)\w*/i,
];

// Leet speak/character substitution normalizer
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[@]/g, 'a')
    .replace(/[0]/g, 'o')
    .replace(/[1!|]/g, 'i')
    .replace(/[3]/g, 'e')
    .replace(/[4]/g, 'a')
    .replace(/[5\$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[8]/g, 'b')
    .replace(/[9]/g, 'g')
    .replace(/\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export interface ModerationResult {
  isInappropriate: boolean;
  severity: 'none' | 'mild' | 'severe';
  matchedPattern?: string;
}

/**
 * Check if a message contains inappropriate content
 */
export function checkMessage(message: string): ModerationResult {
  const normalizedMessage = normalizeText(message);
  const originalLower = message.toLowerCase();
  
  for (const pattern of BAD_WORDS_PATTERNS) {
    if (pattern.test(normalizedMessage) || pattern.test(originalLower)) {
      // Determine severity based on pattern type
      const patternStr = pattern.toString();
      const isSevere = patternStr.includes('kill') || 
                       patternStr.includes('murder') || 
                       patternStr.includes('rape') ||
                       patternStr.includes('terror') ||
                       patternStr.includes('bomb') ||
                       patternStr.includes('n+[i1]+g') ||  // racial slur
                       patternStr.includes('f+[@a]+g');    // homophobic slur
      
      return {
        isInappropriate: true,
        severity: isSevere ? 'severe' : 'mild',
        matchedPattern: patternStr.slice(0, 20) + '...',
      };
    }
  }
  
  return {
    isInappropriate: false,
    severity: 'none',
  };
}

// Storage keys
const STORAGE_KEYS = {
  STRIKES: 'nexxusbot_strikes',
  LOCKOUT_UNTIL: 'nexxusbot_lockout_until',
  TOTAL_VIOLATIONS: 'nexxusbot_total_violations',
} as const;

// Constants
const MAX_STRIKES = 3;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

export interface ModerationState {
  strikes: number;
  isLockedOut: boolean;
  lockoutEndTime: number | null;
  remainingLockoutMs: number;
  totalViolations: number;
}

/**
 * Get current moderation state from localStorage
 */
export function getModerationState(): ModerationState {
  if (typeof window === 'undefined') {
    return {
      strikes: 0,
      isLockedOut: false,
      lockoutEndTime: null,
      remainingLockoutMs: 0,
      totalViolations: 0,
    };
  }

  const strikes = parseInt(localStorage.getItem(STORAGE_KEYS.STRIKES) || '0', 10);
  const lockoutUntil = parseInt(localStorage.getItem(STORAGE_KEYS.LOCKOUT_UNTIL) || '0', 10);
  const totalViolations = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VIOLATIONS) || '0', 10);
  const now = Date.now();

  // Check if lockout has expired
  if (lockoutUntil > 0 && lockoutUntil <= now) {
    // Lockout expired, reset strikes
    localStorage.setItem(STORAGE_KEYS.STRIKES, '0');
    localStorage.removeItem(STORAGE_KEYS.LOCKOUT_UNTIL);
    return {
      strikes: 0,
      isLockedOut: false,
      lockoutEndTime: null,
      remainingLockoutMs: 0,
      totalViolations,
    };
  }

  const isLockedOut = lockoutUntil > now;
  const remainingLockoutMs = isLockedOut ? lockoutUntil - now : 0;

  return {
    strikes,
    isLockedOut,
    lockoutEndTime: isLockedOut ? lockoutUntil : null,
    remainingLockoutMs,
    totalViolations,
  };
}

export interface StrikeResult {
  newStrikes: number;
  isNowLockedOut: boolean;
  warningMessage: string;
  lockoutEndTime?: number;
}

/**
 * Add a strike and potentially trigger lockout
 */
export function addStrike(severity: 'mild' | 'severe'): StrikeResult {
  if (typeof window === 'undefined') {
    return {
      newStrikes: 0,
      isNowLockedOut: false,
      warningMessage: '',
    };
  }

  const state = getModerationState();
  
  // If already locked out, extend slightly
  if (state.isLockedOut) {
    return {
      newStrikes: state.strikes,
      isNowLockedOut: true,
      warningMessage: '🔒 You are currently restricted from using the chatbot.',
      lockoutEndTime: state.lockoutEndTime || undefined,
    };
  }

  // Severe violations count as 2 strikes (or instant lockout if at 2)
  const strikeIncrement = severity === 'severe' ? 2 : 1;
  const newStrikes = Math.min(state.strikes + strikeIncrement, MAX_STRIKES);
  
  // Update total violations count
  const newTotalViolations = state.totalViolations + 1;
  localStorage.setItem(STORAGE_KEYS.TOTAL_VIOLATIONS, newTotalViolations.toString());
  
  // Save new strike count
  localStorage.setItem(STORAGE_KEYS.STRIKES, newStrikes.toString());

  // Check if lockout should be triggered
  if (newStrikes >= MAX_STRIKES) {
    const lockoutEndTime = Date.now() + LOCKOUT_DURATION_MS;
    localStorage.setItem(STORAGE_KEYS.LOCKOUT_UNTIL, lockoutEndTime.toString());
    
    console.warn(`[Nexxusbot Moderation] User locked out until ${new Date(lockoutEndTime).toLocaleTimeString()}`);
    
    return {
      newStrikes,
      isNowLockedOut: true,
      warningMessage: `🚫 **You have been temporarily restricted.**\n\nDue to repeated inappropriate messages, the chatbot is disabled for **15 minutes**.\n\nPlease be respectful when you return.`,
      lockoutEndTime,
    };
  }

  // Warning messages based on strike count
  const remainingStrikes = MAX_STRIKES - newStrikes;
  let warningMessage = '';
  
  if (newStrikes === 1) {
    warningMessage = `⚠️ **Warning (1/${MAX_STRIKES})**\n\nPlease keep the conversation respectful. Continued inappropriate language will result in a temporary restriction.\n\n*${remainingStrikes} warning(s) remaining*`;
  } else if (newStrikes === 2) {
    warningMessage = `⚠️ **Final Warning (2/${MAX_STRIKES})**\n\nThis is your last warning. One more violation will result in a **15-minute restriction** from using the chatbot.\n\n*${remainingStrikes} warning remaining*`;
  }

  console.warn(`[Nexxusbot Moderation] Strike ${newStrikes}/${MAX_STRIKES}`);
  
  return {
    newStrikes,
    isNowLockedOut: false,
    warningMessage,
  };
}

/**
 * Clear all moderation data (for testing/admin purposes)
 */
export function clearModerationData(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(STORAGE_KEYS.STRIKES);
  localStorage.removeItem(STORAGE_KEYS.LOCKOUT_UNTIL);
  localStorage.removeItem(STORAGE_KEYS.TOTAL_VIOLATIONS);
  
  console.log('[Nexxusbot Moderation] Data cleared');
}

/**
 * Format remaining lockout time for display
 */
export function formatRemainingTime(ms: number): string {
  if (ms <= 0) return '0:00';
  
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Get appropriate bot response for inappropriate content
 */
export function getInappropriateContentResponse(strikeResult: StrikeResult): string {
  if (strikeResult.isNowLockedOut) {
    return strikeResult.warningMessage;
  }
  
  return `${strikeResult.warningMessage}\n\n---\n\nI can only answer questions about **Nexxus Lab** and our services. How can I help you today?`;
}
