import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import Creator from '../components/Creator'
import typescriptLogo from '/app/src/logos/typescriptLogo.png'
import DockerComposeLogo from '/app/src/logos/Docker-ComposeLogo.png'
import dockerLogo from '/app/src/logos/dockerLogo.png'
import awsLogo from '/app/src/logos/awsLogo.png'
import laravelLogo from '/app/src/logos/laravelLogo.png'
import phpLogo from '/app/src/logos/phpLogo.png'
import ReactLogo from '/app/src/logos/ReactLogo.png'
import javascriptLogo from '/app/src/logos/javascriptLogo.png'
import gitLogo from '/app/src/logos/GitLogo.png'
import gitHubLogo from '/app/src/logos/GitHubLogo.png'
import nodeJsLogo from '/app/src/logos/nodeJsLogo.png'
import LibraryLogo from '/app/src/logos/LibraryLogo.png'
import EC2Logo from '/app/src/logos/EC2Logo.png'
import S3Logo from '/app/src/logos/S3Logo.png'
import cloud9Logo from '/app/src/logos/cloud9Logo.png'
import vpcLogo from '/app/src/logos/vpcLogo.png'

const EnhancedCreator: React.FC = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Creator
            skillSet={skillSet}
        />
    )
}
export default EnhancedCreator
