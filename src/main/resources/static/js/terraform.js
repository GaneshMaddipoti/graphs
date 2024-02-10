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
let providerDocHTML = `Provider blocks to declare provider information <br/>
Providers need credentials with permissions to access the target environment <br/>
provider "aws" { <br/>
&emsp;        access_key = "ACCESS_KEY" <br/>
&emsp;        secret_key = "SECRET_KEY" <br/>
&emsp;        region = "us-east-1" <br/>
    }
`;
let dataDocHTML = `Data blocks like data sources which information from providers <br/>
data "aws_ssm_parameter" "ami" { <br/>
&emsp; name = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2" <br/>
} <br/>   
`;
let resourceDocHTML = `Resource blocks to declare resources to create in target environment <br/>
resource "aws_instance" "web_server" { <br/>
&emsp;    name = "web_server" <br/>
&emsp;       ebs_volume { <br/>
&emsp;&emsp;            size = 40 <br/>
&emsp;        } <br/>
&emsp;        user_data = < < EOF <br/>
&emsp;        #! /bin/bash <br/>
&emsp;        sudo amazon-linux-extras install -y nginx1 <br/>
&emsp;        sudo service nginx start <br/>
&emsp;        sudo rm /usr/share/nginx/html/index.html <br/>
&emsp;        echo 'hi' > /usr/share/nginx/html/index.html <br/>
&emsp;        EOF, <br/>
&emsp;    tags = local.common_tags     <br/>
    } <br/>
Scripts on resources can be added using user data, provisioners <br/>     
`;

let inputVariablesHTML = `Terraform can accept values through input variables <br/>
Transform values inside config, and return values as output <br/>
Input variables - to pass information to terraform at runtime (while generating plan)<br/>
Variables are defined inside configuration, and values are supplied when terraform is executed <br/>
variable "name_label" { <br/>
 &emsp;   type = value (it defines the data type of the variable) <br/>
 &emsp;   description = "string" (about the purpose of the variable) <br/>
 &emsp;   default = value (to set default value, if not defined, terraform prompt you while running) <br/>
 &emsp;   sensitive = true|false (to display in logs or not) <br/>
} <br/>
Variable can be referred by : var.name_label <br/>
We can also supply input variables as command line arguments using -var (for each varialbe) -var-file (from file) <br/>
We can supply inputs using terraform.tfvars/terraform.tfvars.json <br/>
We can supply inputs using .auto.tfvars/ auto.tfvars.json <br/>
We can pass from environment variables also by declaring with name preix TF_VAR_ <br/>
Order of precedence: TF_VAR_ > terraform.tfvars > .auto.tfvars > -var-file > -var > prompt <br/>
`;

let localsHTML = `Locals are scoped to module, and assigned only once, can't be modified <br/>
Local values - are computed values inside configuration, that can be referred throughout the configuration <br/> 
Think of locals as intermediate variables those can be referred in multiple places <br/>
locals {  <br/>
 &emsp; key = value (key is string, value can be any data type)<br/>
 &emsp; company = var.company (referrin input variables) <br/>
 &emsp; project = "\${var.company}-\${var.project}" <br/>   
} <br/>
Locals can be referred by : local.key <br/>`;

let outputVariablesHTML = `
Output variables - data returned from terraform as output variables <br/>
They are defined inside configuration, and values are computed based on more than one object <br/>
Outputs are printed on terminal after terraform execution <br/>
Terraform also stores the output variables in state data <br/>
output "name_lable" { <br/>
 &emsp; value = value <br/>
 &emsp; description = "string" <br/>
 &emsp; sensitive = true|false <br/>
 } <br/>`;

 let lintingHTML = `We can do linting in terraform using terraform fmt, terraform validate <br/>
 terraform fmt - shorthand for format, formats the code in current directory, to hashicorp standard <br/>
   &emsp; - check (will check your code) <br/>
   &emsp; - recursive (will check and fix in cd and subs) <br/>
 terraform validate - validates the syntax and logic of code configuration is correct <br/>
 terraform init is required to run before terraform validate <br/>
 terraform validate - will not check current state of the environment <br/>
`;

let dataTypesHTML = `Terraform supports 3 types of data <br/>
1) Primitive - String, number, bool <br/>
2) Collection - Group of primitives or other collections(same type) (list, set, map) <br/>
3) Structural - like collection, but heterogeneous (Tuple - list, object - map) <br/>
any - meaning any type (ex: list(any))<br/> 
Null - no value <br/>
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
&emsp; module "ec2module" { <br/>
&emsp;&emsp;  source = "../../modules/ec2" <br/>
&emsp; } <br/>
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
`;

let gitSCMHTML = `In organizations, the terraform code is maintained in a Git SCM system <br/>
Do not include passwords, tfstate files to git SCM <br/>
`;

let stateMgmtHTML = `In local machine, terraform.tfstage will hold default workspace state <br/>
terraform.d/dev; terraform.d/test; terraform.d/prod - will hold the corresponding workspace state <br/>
Whenever we do write operation on tfstate file, it holds to lock to prevent synchronization issues <br/>
In Organizations, the terraform state file is maintained at central location <br/>
Some of the locations are : AWS S3, HTTP, Azurerm, Consul etc... <br/>
Remote state will use authentication protocols while managing the state <br/>
Remote state will use locks to avoid synchronization issues <br/>
terraform { <br/>
&emsp;  backend "s3" { <br/>
&emsp;&emsp;    bucket = "terraform-bucket" <br/>
&emsp;&emsp;    key    = "path to tfstate file in bucket" <br/>
&emsp;&emsp;    region = "us-east-1" <br/>
&emsp;  } <br/>
} <br/>
Using force-unlock, we can forcefully unlock a state file <br/>
$terraform state list - will list all state files <br/>
$terraform state mv - will rename the state file <br/>
$terraform state pull -  <br/>
$terraform state push -  <br/>
$terraform state rm -  <br/>
$terraform state show -  <br/>
data.terraform_remote_state will fetch output values of other project stored in remote state file <br/>
data 'terraform_remote_state" "eip" { <br/>
&emsp;  backend = "s3" <br/>
<br/>
&emsp;  config = { <br/>
&emsp;&emsp;    bucket = "terraform-bucket" <br/>
&emsp;&emsp;    key    = "path to tfstate file in bucket" <br/>
&emsp;&emsp;    region = "us-east-1" <br/>
&emsp;    } <br/>
  } <br/>
`;

let tfInitHTML = `terraform init <br/>
Will check all configuration files in current directory <br/>
If it's required, it will pull plugins from terraform repository/mentioned repository <br/>
It will create state data file in current directory / will initialize state data backend <br/>
`;

let tfPlanHTML = `terraform plan -out sample.tfplan <br/>
Will compare configuration in current directory with state data <br/>
Make out the differences and make the plan to update the infra in target environment. <br/>
We can save the plan to text file, and feed it to apply stage <br/>
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

let providersHTML = `terraform.tf - file used to declare providers information <br/>
terraform block is used to mention terraform version and provider versions. <br/>
terraform \{ <br/>
&emsp; required_version = "version_constraints" - to declare terraform version constraints. <br/>
&emsp; required_providers \{ - to declare provider information <br/>
&emsp; &emsp; provider_name = \{ <br/>
&emsp; &emsp; &emsp; source = "address of provider" <br/>
&emsp; &emsp; &emsp; version = "version constraints" <br/>
&emsp; &emsp;} <br/>
&emsp;} <br/>
} <br/>
When terraform init executed, it wil create actual configuration .terraform.lock.hcl <br/>

`;

let tfNodeDataArray = [
    {key: "Terraform", desc: "Terraform", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/terraform/terraform.svg", toolTipHTML: tfHTML.replaceAll("\n", "<br/>")},

    {key: "hcl-doc", desc: "hcl-doc", isGroup: true, color: "WhiteSmoke", category: "grid-congested", img: "assets/img/terraform/tf-hcl.svg", group: "Server", toolTipHTML: hclDocHTML},
    {key: "Provider", desc: "Provider", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: providerDocHTML},
    {key: "Data", desc: "Data", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: dataDocHTML},
    {key: "Resource", desc: "Resource", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: resourceDocHTML},
    {key: "Input Variables", desc: "Input Variables", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: inputVariablesHTML},
    {key: "Locals", desc: "Locals", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: localsHTML},
    {key: "Output Variables", desc: "Output Variables", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: outputVariablesHTML},
    {key: "Linting", desc: "Linting", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: lintingHTML},
    {key: "Data Types", desc: "Data Types", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: dataTypesHTML},
    {key: "Modules", desc: "Modules", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: modulesHTML},
    {key: "Workspaces", desc: "Workspaces", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: workSpacesHTML},
    {key: "GitSCM", desc: "Git SCM", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: gitSCMHTML},
    {key: "State Mgmt", desc: "State Mgmt", img: "assets/img/terraform/tf-hcl.svg", category: "picTemplate", group: "hcl-doc", toolTipHTML: stateMgmtHTML},

    {key: "Server", desc: "Server", isGroup: true, color: "WhiteSmoke", category: "tree", img: "assets/img/terraform/tf-binary.svg", group: "Terraform"},



    {key: "Workflow", desc: "Workflow", color: "WhiteSmoke", isGroup: true, category: "tree90", img: "assets/img/terraform/tf-workflow.svg", group: "Server"},
    {key: "terraform init", desc: "terraform init", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfInitHTML},
    {key: "terraform plan", desc: "terraform plan", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfPlanHTML},
    {key: "terraform apply", desc: "terraform apply", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfApplyHTML},
    {key: "terraform destroy", desc: "terraform destroy", img: "assets/img/terraform/tf-binary.svg", category: "picTemplate", group: "Workflow", toolTipHTML: tfDestroyHTML},

    {key: "State Data", desc: "State Data", category: "picTemplate", img: "assets/img/terraform/tf-state.svg", group: "Server", toolTipHTML: stateDataHTML},

    {key: "Provider Plugin", desc: "Provider Plugin", img: "assets/img/terraform/tf-plugin.svg", category: "picTemplate", group: "Server", toolTipHTML: providersHTML},

    {key: "Target Environment", desc: "Target Environment", img: "assets/img/gen/gen-cloud.svg", category: "picTemplate", group: "Terraform"},

];

let tfLinkDataArray = [
    {from:"hcl-doc", to: "Workflow", category: "simplelink"},
    {from:"terraform init", to: "terraform plan", category: "simplelink"},
    {from:"terraform init", to: "State Data", category: "simplelink"},
    {from:"terraform plan", to: "terraform apply", category: "simplelink"},
    {from:"terraform plan", to: "State Data", category: "simplelink"},
    {from:"terraform apply", to: "Provider Plugin", category: "simplelink"},
    {from:"terraform apply", to: "State Data", category: "simplelink"},
    {from:"Provider Plugin", to: "Target Environment", category: "simplelink"},
];

nodeDataArray = nodeDataArray.concat(tfNodeDataArray);
linkDataArray = linkDataArray.concat(tfLinkDataArray);