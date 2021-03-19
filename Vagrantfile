# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 2.1.1"

Vagrant.configure("2") do |config|

	config.vm.define "dev" do |dev|
		dev.vm.box = "bento/ubuntu-18.04"

		dev.vm.hostname = "dev"
		dev.vm.network "private_network", type: "dhcp"
		dev.vm.network "forwarded_port", guest: 80, host: 80

		dev.vm.synced_folder "./", "/home/vagrant/project"

		dev.vm.provision "installDocker", type: "shell" do |shell|
			shell.inline = <<~BLOCK
				sudo apt-get remove docker docker-engine docker.io containerd runc

				mkdir tmp
				cd tmp
				curl -o docker.deb https://download.docker.com/linux/ubuntu/dists/xenial/pool/stable/amd64/docker-ce_18.06.3~ce~3-0~ubuntu_amd64.deb
				cd ..
				sudo apt-get -y install ./tmp/docker.deb
				rm -r tmp

				sleep 3

				docker run hello-world
      BLOCK
    end

		dev.vm.provision "addVagrantToDockerGroup", type: "shell" do |shell|
			shell.inline = <<~BLOCK
				sudo usermod -aG docker vagrant
      BLOCK
    end

		dev.vm.provision "installDockerCompose", type: "shell" do |shell|
			shell.inline = <<~BLOCK
				sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
				sudo chmod +x /usr/local/bin/docker-compose
      BLOCK
    end
	end
end
