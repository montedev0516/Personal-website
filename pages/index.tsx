import { Box, CircularProgress } from '@mui/material';
import Head from 'next/head';
import { EducationSectionComponent } from '../components/sections/education-section.component';
import { ExperienceSectionComponent } from '../components/sections/experience-section.component';
import { HighlightSectionComponent } from '../components/sections/highlight-section.component';
import { LanguagesSectionComponent } from '../components/sections/languges-section.component';
import { PortfolioSectionComponent } from '../components/sections/portfolio-section.component';
import { ProfileSectionComponent } from '../components/sections/profile-section.component';
import { PublicationSectionComponent } from '../components/sections/publication-section.component';
import { RecommendationSectionComponent } from '../components/sections/recommendation-section.component';
import { SkillsSectionComponent } from '../components/sections/skills-section.component';
import { config } from '../configs/config';
import { useFirebase } from '../features/firebase/providers/firebase.hook';
import { WrapperComponent } from '../features/navigation/components/wrapper.component';

export default function Home() {
  const { isLoading, profile } = useFirebase();

  if (isLoading) {
    return (
      <WrapperComponent>
        <Head>
          <title>
            {config.siteName} | {config?.userTitle}
          </title>
          <meta charSet="utf-8" />
          <meta name="description" content={config?.userDescription} />
          <meta property="og:title" content={config.siteName + ' | ' + config?.userTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={config?.siteUrl} />
          <meta property="og:image" content={config?.userImageUrl} />
        </Head>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 20 }}>
          <CircularProgress />
        </Box>
      </WrapperComponent>
    );
  }

  return (
    <WrapperComponent>
      <Head>
        <title>
          {config.siteName} | {profile?.title}
        </title>
        <meta name="description" content={profile?.description} />
        <link rel="canonical" href={config.siteUrl} />
      </Head>
      <ProfileSectionComponent />
      <HighlightSectionComponent />
      <ExperienceSectionComponent />
      <SkillsSectionComponent />
      <LanguagesSectionComponent />
      <EducationSectionComponent />
      <RecommendationSectionComponent />
      <PortfolioSectionComponent />
      <PublicationSectionComponent />
    </WrapperComponent>
  );
}
