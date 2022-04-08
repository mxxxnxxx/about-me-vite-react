import React, { useEffect } from 'react'
import SkillStets from '../../components/organisms/SkillSets'
import awsLogo from '../../logos/awsLogo.png'
import DockerComposeLogo from '../../logos/Docker-ComposeLogo.png'
import dockerLogo from '../../logos/dockerLogo.png'
import EC2Logo from '../../logos/EC2Logo.png'
import gitHubLogo from '../../logos/GitHubLogo.png'
import gitLogo from '../../logos/GitLogo.png'
import javascriptLogo from '../../logos/javascriptLogo.png'
import laravelLogo from '../../logos/laravelLogo.png'
import phpLogo from '../../logos/phpLogo.png'
import ReactLogo from '../../logos/ReactLogo.png'
import S3Logo from '../../logos/S3Logo.png'
import typescriptLogo from '../../logos/typescriptLogo.png'
import vpcLogo from '../../logos/vpcLogo.png'

const EnhancedSkillSets: React.FC = () => {
    // js関係
    const react = {
        name: 'React',
        logo: ReactLogo,
        skill: [
            'React Hook',
            'React Hook Form',
            'React Query',
            'Material UI'
        ]
    }
    const TypeScript = {
        name: 'TypeScript',
        logo: typescriptLogo,
    }

    const JavaScript = {
        name: 'JavaScript',
        logo: javascriptLogo,
        skill: [
            react,
            TypeScript,
        ]
    }

    // php関係

    const laravel = {
        name: 'Laravel',
        logo: laravelLogo,
        skill: [
            'Laravel Mix',
            'Laravel Debugbar'
        ]
    }
    const php = {
        name: 'PHP',
        logo: phpLogo,
        skill: [
            laravel
        ]
    }
    // docker関係
    const DockerCompose = {
        name: 'Docker Compose',
        logo: DockerComposeLogo
    }
    const docker = {
        name: 'docker',
        logo: dockerLogo,
        skill: [
            DockerCompose
        ]
    }

    // aws関係
    const EC2 = {
        name: 'EC2',
        logo: EC2Logo,
    }
    const VPC = {
        name: 'VPC',
        logo: vpcLogo,
    }
    const S3 = {
        name: 'S3',
        logo: S3Logo,
    }
    const aws = {
        name: 'aws',
        logo: awsLogo,
        skill: [
            EC2,
            VPC,
            S3
        ]
    }
    // git関係
    const gitHub = {
        name: 'gitHub',
        logo: gitHubLogo,
    }

    const git = {
        name: 'git',
        logo: gitLogo,
        skill: [
            gitHub
        ]

    }
    const skillSet = [
        JavaScript,
        php,
        docker,
        aws,
        git
    ]

    return (
        <SkillStets
            skillSet={skillSet}
        />
    )
}
export default EnhancedSkillSets
