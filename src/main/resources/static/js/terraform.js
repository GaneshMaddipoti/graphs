let tfHTML = `Terraform - Infrastructure as code.
    Tool for provisioning and managing infrastructure through software to achieve consistent and predictable deployments. 
    1) Its declarative, defined in code, stored in source control
    2) Open Source
    3) Vendor agnostic
    4) Idempotent - maintains state, and apply if there is any change in configuration, otherwise no.
    5) Consistent - each time it deploys, it always do it in consistent way.
    6) Push based deployment - using API.
    7) Hashicorp configuration language (HCL) or JSON
    
    Benefits 
    1) Reusable components
    2) Automation of deployment.
    3) Repeatable process
    4) Consistent deployments
    5) Documenting the deployment architecture
    
    Core Components
    1) Executable
    2) Configuration Files
    3) Provider plugins
    4) State data
`;

let terraformDocHTML = `terraform.tf - file used to declare providers information <br/>
terraform block is used to mention terraform version and provider versions. <br/>
<div class="sourceCode">
terraform \{ 
&emsp; required_version = "version_constraints" - to declare terraform version constraints. 
&emsp; required_providers \{ - to declare provider information 
&emsp; &emsp; provider_name = \{ 
&emsp; &emsp; &emsp; source = "address of provider" 
&emsp; &emsp; &emsp; version = "version constraints" 
&emsp; &emsp;} 
&emsp;} 
} </div>
When terraform init executed, it wil create actual configuration .terraform.lock.hcl <br/>

`;

let providerDocHTML = `Provider blocks to declare provider information <br/>
Providers need credentials with permissions to access the target environment <br/>
<div class="sourceCode">
provider "aws" { 
&emsp;        access_key = "ACCESS_KEY" 
&emsp;        secret_key = "SECRET_KEY" 
&emsp;        region = "us-east-1" 
    }</div>    
`;
let dataDocHTML = `Data blocks like data sources which fetch information from providers <br/>
<div class="sourceCode">
data "aws_ssm_parameter" "ami" { 
&emsp; name = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2" 
}    </div>
`;
let resourceDocHTML = `Resource blocks to declare resources to create in target environment <br/>
<div class="sourceCode">
resource "aws_instance" "web_server" { 
&emsp;    name = "web_server" 
&emsp;       ebs_volume { 
&emsp;&emsp;            size = 40 
&emsp;        } 
&emsp;        user_data = < < EOF 
&emsp;        #! /bin/bash 
&emsp;        sudo amazon-linux-extras install -y nginx1 
&emsp;        sudo service nginx start 
&emsp;        sudo rm /usr/share/nginx/html/index.html 
&emsp;        echo 'hi' > /usr/share/nginx/html/index.html 
&emsp;        EOF, 
&emsp;    tags = local.common_tags     
    } </div>
Scripts on resources can be added using user data, provisioners <br/>     
`;

let inputVariablesHTML = `Terraform can accept values through input variables <br/>
Transform values inside config, and return values as output <br/>
Input variables - to pass information to terraform at runtime (while generating plan)<br/>
Variables are defined inside configuration, and values are supplied when terraform is executed <br/>
<div class="sourceCode">
variable "name_label" { 
 &emsp;   type = value (it defines the data type of the variable) 
 &emsp;   description = "string" (about the purpose of the variable) 
 &emsp;   default = value (to set default value, if not defined, terraform prompt you while running) 
 &emsp;   sensitive = true|false (to display in logs or not) 
} <br/></div>
Variable can be referred by : var.name_label <br/>
We can also supply input variables as command line arguments using -var (for each varialbe) -var-file (from file) <br/>
We can supply inputs using terraform.tfvars/terraform.tfvars.json <br/>
We can supply inputs using .auto.tfvars/ auto.tfvars.json <br/>
We can pass from environment variables also by declaring with name preix TF_VAR_ <br/>
Order of precedence: prompt > -var > -var-file > .auto.tfvars > terraform.tfvars > TF_VAR_<br/>
`;

let localsHTML = `Locals are scoped to module, and assigned only once, can't be modified <br/>
Local values - are computed values inside configuration, that can be referred throughout the configuration <br/> 
Think of locals as intermediate variables those can be referred in multiple places <br/>
<div class="sourceCode">
locals {  
 &emsp; key = value (key is string, value can be any data type)
 &emsp; company = var.company (referrin input variables) 
 &emsp; project = "\${var.company}-\${var.project}"    
} </div>
Locals can be referred by : local.key <br/>`;

let outputVariablesHTML = `
Output variables - data returned from terraform as output variables <br/>
They are defined inside configuration, and values are computed based on more than one object <br/>
Outputs are printed on terminal after terraform execution <br/>
Terraform also stores the output variables in state data <br/>
<div class="sourceCode">
output "name_lable" { 
 &emsp; value = value 
 &emsp; description = "string" 
 &emsp; sensitive = true|false - will check to display/log while execution
 } </div>`;

 let lintingHTML = `We can do linting in terraform using terraform fmt, terraform validate <br/>
 terraform fmt - shorthand for format, formats the code in current directory, to hashicorp standard <br/>
   &emsp; - check (will check your code) <br/>
   &emsp; - recursive (will check and fix in cd and subs) <br/>
 terraform validate - validates the syntax and logic of code configuration is correct <br/>
 terraform init is required to run before terraform validate <br/>
 terraform validate - will not check current state of the environment <br/>
`;

let hclDocHTML = `Terraform Objects types are <br/>
1) Provider - which provider plugin we are using, and its configuration<br/>
2) Data - to query information from provider <br/>
3) Resource - things we are going to crate in target env.<br/>
main.tf - is the main terraform file, which will be picked by terraform to create the infra <br/>
main.tf contains blocks of code, each block represents the objects type - provider, data, resource <br/>
block_type "label" "name_label" { <br/>  
- series of labels that are dependent on the object it is (type, name) <br/>
- last label will be the name of that object, can be referred anywhere in the configuration <br/>
key = "value" - one or more key(string) value pairs/ available arguments of the object <br/>
- we can have nested blocks <br/>
} <br/>
We can refer objects by - object_type.name_label.attribute <br/>
###### - single line comments starts by # <br/>
`;

let modulesHTML = `Modules let us reuse the code in multiple places <br/>
Group of tf files make up the module<br/>
Each module will have input variables, resources/data sources, output variables <br/>
Terraform starts with root module, and executes child module, and so on... <br/>
Flow of information between the modules are controlled by input and out variables <br/>
<div class="sourceCode">
&emsp; module "ec2module" { 
&emsp;&emsp; source = "../../modules/ec2" 
&emsp;&emsp; version = ""      
&emsp;&emsp; providers  = \{ 
&emsp;&emsp;&emsp; module_provider = parent_provider 
&emsp;&emsp; }      
&emsp;
} </div>
There are multiple options to store module sources <br/>
1) Local system <br/>
2) Git SCM (prefixed with git::) (branch can be added by ?ref=v1.2.3 to url) <br/>
3) Terraform registry <br/>
4) HTTP urls like S3, any remote location <br/>

We can declare variables needed for modules, and pass them using variables at runtime <br/>
For static data, we can declare them as locals and refer them. <br/>
There are public modules in terraform public registry, which are free to use <br/>
We can also publish modules to terraform public registry and maintaining them in GitHub <br/>
`;

let workSpacesHTML = `Terraform allows us to use multiple workspaces <br/>
Each workspace has its own environment variables <br/>
$terraform workspace list - will display all available workspaces <br/>
$terraform workspace new dev - create new workspace named dev <br/>
$terraform workspace show - show current workspace <br/>
$terraform workspace select dev - will select the workspace <br/>
`;

let workFlwoHTML = `terraform init <br/>
terraform plan <br/>
terraform apply <br/>
terraform import - will import the corresponding state of current infra <br/>
terraform graph - will generate visual representation of plan in DOT format<br/>
terraform taint - will force the resource to be destroyed and re-created next time<br/>
terraform console - to get interactive cli for expression evaluation <br/>
terraform get -update - to update modules <br/>
`;

let gitSCMHTML = `In organizations, the terraform code is maintained in a Git SCM system <br/>
Do not include passwords, tfstate files to git SCM <br/>
Supported SCM providers <br/>
GitHub.com <br/>
GitHub App for TFE <br/>
GitHub.com (OAuth) <br/>
GitHub Enterprise <br/>
GitLab.com <br/>
GitLab EE and CE <br/>
Bitbucket Cloud <br/>
Bitbucket Server <br/>
Azure DevOps Server <br/>
Azure DevOps Services <br/>
`;

let stateMgmtHTML = `In local machine, terraform.tfstage will hold default workspace state <br/>
terraform.d/dev; terraform.d/test; terraform.d/prod - will hold the corresponding workspace state <br/>
Whenever we do write operation on tfstate file, it holds to lock to prevent synchronization issues <br/>
In Organizations, the terraform state file is maintained at central location <br/>
Some of the locations are : AWS S3, HTTP, Azurerm, Consul etc... <br/>
Remote state will use authentication protocols while managing the state <br/>
Remote state will use locks to avoid synchronization issues <br/>
<div class="sourceCode">
terraform { 
&emsp;  backend "s3" { 
&emsp;&emsp;    bucket = "terraform-bucket" 
&emsp;&emsp;    key    = "path to tfstate file in bucket" 
&emsp;&emsp;    region = "us-east-1" 
&emsp;  } 
} 
</div>
Using force-unlock, we can forcefully unlock a state file <br/>

data.terraform_remote_state will fetch output values of other project stored in remote state file <br/>
<div class="sourceCode">
data 'terraform_remote_state" "eip" { 
&emsp;  backend = "s3" 

&emsp;  config = { 
&emsp;&emsp;    bucket = "terraform-bucket" 
&emsp;&emsp;    key    = "path to tfstate file in bucket" 
&emsp;&emsp;    region = "us-east-1" 
&emsp;    } 
  } 
  </div>
`;

let tfSyntaxHTML = `Terraform supports 3 types of data <br/>
1) Primitive - String, number, bool <br/>
2) Collection - Group of primitives or other collections(same type) (list, set, map) <br/>
3) Structural - like collection, but heterogeneous (Tuple - list, object - map) <br/>
any - meaning any type (ex: list(any))<br/> 
Null - no value
Path expressions to get paths while constructing urls <br/>
\${path.root} - path of root directory<br/>
\${path.module} - path of module directory<br/>
\${path.cwd} - path of current working directory <br/>
Terraform has built-in functions <br/>
max(1,2,3) -> 3, will give max from the list of numbers <br/>
`;

let configurationHTML = `Logging can be enabled by setting TF_LOG environment variable <br/>
TF_LOG can be set to TRACE, DEBUG, INFO, WARN, and ERROR <br/>
Also, to persist logs we can set the TF_LOG_PATH environment variable <br/>
`;

let tfInitHTML = `terraform init <br/>
Will check all configuration files in current directory <br/>
If it's required, it will pull modules/plugins from terraform repository/mentioned repository <br/>
.terraform/modules <br/>
.terraform/providers <br/>
It will create state data file in current directory / will initialize state data backend <br/>
`;

let tfPlanHTML = `terraform plan -out sample.tfplan <br/>
terraform use resources meta argument to manage a resource <br/>
terraform will load the state into memory and updates its resource/data attributes with target infra <br/>
terraform will make dependency graph based on the objects defined in the code <br/>
Will compare configuration in current directory with state data, and prepare additions, updates, deletes <br/>
Make out the differences and make the plan to update the infra in target environment. <br/>
terraform will try to do updates in parallel - (Defaults to 10 threads)<br/>
We can save the plan to text file, and feed it to apply stage <br/>
Scenario 1 : Configuration is present(ec2), no state, no infra <br/>
<b>terraform will plan to create infra, and update state to (ec2:id:1) </b><br/>
Scenario 2 : Configuration is present(ec2),  state present (ec2:id:1), no infra <br/>
<b>terraform will plan to create infra, and update state to (ec2:id:2) </b><br/>
Scenario 3 : No configuration, have state, have infra <br/>
<b>terraform will plan to destroy the infra, and remove state data</b><br/>
Scenario 4 : Configuration is present(ec2), no state, have infra <br/>
<b>terraform will plan to create infra, and update the state data</b><br/>

`;

let tfApplyHTML = `terraform apply "sample.tfplan" (if we didn't provide sample.tfplan, it will do plan and ask for confirm)<br/> 
Executes the plan using provider plugins in target environment <br/>
Resources are created/modified in target environment, and state data is updated <br/>
If there is no change in state data next time apply, it won't do anything <br/>
`;

let tfDestroyHTML = `terraform destroy - will create plan first and ask us to confirm like plan <br/>
Will destroy everything in target environment, which terraform is maintaining in its state data <br/> 
`;

let stateDataHTML = `terraform.tfstate is the state file if you put locally <br/>
State data contains Resources, data, and outputs <br/>
It maps resources, data sources to infra in target environment <br/>
State data stored in JSON format (Do not touch!) <br/>
Maps objects id to unique id in target environment <br/>
Planning <br/>
Refreshes the state data by querying deployment data from target environment <br/>
Compares the values in configuration and values in state data <br/>
Contains metadata of terraform version used and version of state data format and S.No of current state data <br/>
Locking - if terraform changing its state data it puts a lock for synchronization <br/>
State data can be local or remotely in AWS s3, Azure, NFS, Terraform cloud <br/>
Workspaces - to use same configuration to spin up multiple instances with different state data <br/>
terraform state list - lists  all state resources <br/> 
terraform state show ADDRESS(type.name) - to get more info <br/>
terraform state mv SOURCE DESTINATION - to move an item in state <br/>
terraform state rm ADDRESS - to remove an item in state <br/>
`;

let providerPluginHTML = `There are multiple ways of specifying version to provider plugin <br/>
>=1.0   - greater than or equal to <br/>
<=1.0   - less than or equal to <br/>
~>2.0   - any version in the range 2.x <br/>
>=2.10,<=2.30 - any version between 2.10 and 2.30 <br/> 
`;

let provisionersHTML = `Provisioners to configure the resource post deployment <br/>
Provisioners are of file, local-exec, remote-exec types <br/>
If provisioner fails, terraform apply also will be failed by default <br/>
We can change this behavior by setting on_failure = continue/fail <br/>
There are 2 primary types of provisioners <br/>
1) Creation time provisioner - if it fails, resource marked a tainted<br/>
2) Destroy time provisioner <br/>
`;

let tfNodeDataArray = [
    {key: "Terraform", desc: "Terraform", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/terraform/terraform.svg", toolTipHTML: tfHTML.replaceAll("\n", "<br/>")},

    {key: "Server", desc: "Server", isGroup: true, color: "WhiteSmoke", category: "tree", img: "assets/img/terraform/tf-binary.svg", group: "Terraform"},

    {key: "SCM", desc: "SCM", color: "WhiteSmoke", isGroup: true, category: "tree90", img: "assets/img/terraform/tf-hcl.svg", group: "Server"},

    {key: "sourceCode", desc: "Source Code", isGroup: true, color: "WhiteSmoke", category: "tree90", img: "assets/img/terraform/tf-hcl.svg", group: "SCM", toolTipHTML: hclDocHTML},

    {key: "Modules", desc: "Modules", isGroup: true, color: "WhiteSmoke", category: "grid-congested", img: "assets/img/terraform/tf-hcl.svg", group: "sourceCode", toolTipHTML: modulesHTML},

    {key: "Syntax", desc: "Syntax", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: tfSyntaxHTML},
    {key: "Configuration", desc: "Configuration", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: configurationHTML},
    {key: "terraform", desc: "terraform", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: terraformDocHTML},
    {key: "Provider", desc: "Provider", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: providerDocHTML},
    {key: "Data", desc: "Data", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: dataDocHTML},
    {key: "Resource", desc: "Resource", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: resourceDocHTML},
    {key: "Input Variables", desc: "Input Variables", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: inputVariablesHTML},
    {key: "Locals", desc: "Locals", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: localsHTML},
    {key: "Output Variables", desc: "Output Variables", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: outputVariablesHTML},
    {key: "Linting", desc: "Linting", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: lintingHTML},

    {key: "State Mgmt", desc: "State Mgmt", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "Modules", toolTipHTML: stateMgmtHTML},


    {key: "GitSCM", desc: "Git SCM", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "SCM", toolTipHTML: gitSCMHTML},

    {key: "Workspaces", desc: "Workspaces", img: "assets/img/terraform/tf-hcl.svg", color: "WhiteSmoke", isGroup: true, category: "tree90", group: "Server", toolTipHTML: workSpacesHTML},

    {key: "Workflow", desc: "Workflow", color: "WhiteSmoke", isGroup: true, category: "tree90", img: "assets/img/terraform/tf-workflow.svg", group: "Workspaces", toolTipHTML: workFlwoHTML},
    {key: "terraform init", desc: "terraform init", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfInitHTML},
    {key: "terraform plan", desc: "terraform plan", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfPlanHTML},
    {key: "terraform apply", desc: "terraform apply", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfApplyHTML},
    {key: "terraform destroy", desc: "terraform destroy", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfDestroyHTML},

    {key: "State Data", desc: "State Data", category: "picTemplate", img: "assets/img/terraform/tf-state.svg", group: "Server", toolTipHTML: stateDataHTML},

    {key: "Provider Plugin", desc: "Provider Plugin", img: "assets/img/terraform/tf-plugin.svg", category: "picTemplate", group: "Server", toolTipHTML: providerPluginHTML},
    {key: "Provisioners", desc: "Provisioners", img: "assets/img/terraform/tf-plugin.svg", category: "picTemplate", group: "Server", toolTipHTML: provisionersHTML},

    {key: "Target Environment", desc: "Target Environment", img: "assets/img/gen/gen-cloud.svg", category: "picTemplate", group: "Terraform"},

];

let tfLinkDataArray = [
    {from:"SCM", to: "Workspaces", category: "simplelink"},
    {from:"sourceCode", to: "GitSCM", category: "simplelink"},
    {from:"terraform init", to: "terraform plan", category: "simplelink"},
    {from:"terraform init", to: "State Data", category: "simplelink"},
    {from:"terraform plan", to: "terraform apply", category: "simplelink"},
    {from:"terraform plan", to: "State Data", category: "simplelink"},
    {from:"terraform apply", to: "Provider Plugin", category: "simplelink"},
    {from:"terraform apply", to: "Provisioners", category: "simplelink"},
    {from:"terraform apply", to: "State Data", category: "simplelink"},
    {from:"Provider Plugin", to: "Target Environment", category: "simplelink"},
];

nodeDataArray = nodeDataArray.concat(tfNodeDataArray);
linkDataArray = linkDataArray.concat(tfLinkDataArray);