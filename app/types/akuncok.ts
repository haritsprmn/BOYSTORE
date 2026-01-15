export interface Usage {
  timestamp: number;
  maxUses: number;
  uses: number;
  usesLeft: number;
}

export interface Profil {
  success: boolean;
  index: number;
  _displayName: string;
  usage: Usage;
}

export interface StatusAkunResponse {
  accounts: Profil[];
}
