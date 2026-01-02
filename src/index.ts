import { AuresClient } from './client';
import { loadProfile } from './modules/profile';
import { loadProjects } from './modules/projects';
import { loadExperience } from './modules/experience';
import { loadAwards } from './modules/awards';
import { loadCertificates } from './modules/certificates';
import { loadSkills } from './modules/skills';

export {
    AuresClient,
    loadProfile,
    loadProjects,
    loadExperience,
    loadAwards,
    loadCertificates,
    loadSkills
};

export default AuresClient;

export * from './types';
export * from './error';

declare global {
    interface Window {
        Aures: typeof AuresClient;
        loadProfile: typeof loadProfile;
        loadProjects: typeof loadProjects;
        loadExperience: typeof loadExperience;
        loadAwards: typeof loadAwards;
        loadCertificates: typeof loadCertificates;
        loadSkills: typeof loadSkills;
    }
}

if (typeof window !== 'undefined') {
    window.Aures = AuresClient;
    window.loadProfile = loadProfile;
    window.loadProjects = loadProjects;
    window.loadExperience = loadExperience;
    window.loadAwards = loadAwards;
    window.loadCertificates = loadCertificates;
    window.loadSkills = loadSkills;
}