let messagingSystemHTML = ``;
let kafkaHTML = ``;
let producerHTML = ``;
let brokerHTML = `
`;
let propertiesHTML = `Contents : 
    bootstrap.servers : broker list 
    key.serializer 
    value.serializer 
    acknowledgment modes acks 
    0 : fire and forget 
    1 : leader acknowledged 
    2 : all brokers acknowledged 
`;
let cpropertiesHTML = `Contents :
    bootstrap.servers : broker list 
    key.deserializer 
    value.deserializer 
    Topics subscribed 
    Partitions assigned 
    enable.auto.commit : true 
    auto.commit.interval : 5000 
`;
let producerRecordHTML = `Contents :
    Topic 
    Partition 
    Timestamp 
    Key : play role in partitioning strategy 
    Value 
`;
let serializersHTML = `
    Serializes the producer record using serializer configured 
`;
let partitionerHTML = `
    Determines which partition to write 
    Has partition ? direct 
    Has Key ? partition config class ? custom 
    Has Key ? No partition config ? Key mod-hash 
    Has no Key ? Round robin 
`;
let metadataHTML = `
    Contains detailed information of the cluster. 
    Brokers 
    Topics 
    Partitions 
`;
let cmetadataHTML = `
    Initialized with detailed information of the cluster. 
    Brokers 
    Topics 
    Partitions 
`;
let recordAccumulatorHTML = `
    Sends the messages in RecordBatches 
`;
let consumerHTML = `
    Its a single threaded application 
    Maintain offset for last read event position 
    Subscribe is to subscribe topics 
    Assign is to subscribe to partitions 
`;
let topicHTML = `
    Its a logic abstraction of physical partition commit logs. 
    Single source of truth. 
    Higher order data structures derive from the log (Tables, Views, Indexes, etc...) 
    Point of recovery 
    Basis for replication and distribution 
    Retention period of messages is defined on a per-topic basis. 
    Replication factor is set at topic level 
`;
let partitionHTML = `
    Each partition will have different messages 
    It entirely fit/present in one machine. 
`;
let messageHTML = `
    Event contents 
    Timestamp 
    Referencable Identifier 
    Payload (Binary) 
`;

let consumeHTML = `
    commitSync()/commitAsync() to programmatically commit the record. 
`;

let kafkaNodeDataArray = [
    {key: "Messaging System", desc: "Messaging System", color: "WhiteSmoke", isGroup: true, category: "tree",
        img: "assets/img/gen/gen-mq.svg", toolTipHTML: messagingSystemHTML, expand: false, group: "Tech Skills"},

    {key: "Producer", desc: "Producer", color: "WhiteSmoke", group:"Messaging System", isGroup: true, category: "grid", img: "assets/img/gen/gen-client.svg", toolTipHTML: producerHTML},

    {key: "Producer Record", desc: "Producer Record", group:"Producer", img: "assets/img/gen/gen-document.svg", category: "picTemplate", toolTipHTML: producerRecordHTML},
    {key: "Serializers", desc: "Serializers", group:"Producer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: serializersHTML},
    {key: "Partitioner", desc: "Partitioner", group:"Producer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: partitionerHTML},
    {key: "Properties", desc: "Properties", group:"Producer", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: propertiesHTML},
    {key: "Metadata", desc: "Metadata", group:"Producer", img: "assets/img/gen/gen-document.svg", category: "picTemplate", toolTipHTML: metadataHTML},
    {key: "Record Accumulator", desc: "Record Accumulator", group:"Producer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: recordAccumulatorHTML},

    {key: "Kafka", desc: "Kafka", group:"Messaging System", color: "WhiteSmoke", isGroup: true, category: "tree90", img: "assets/img/gen/gen-cluster-group.svg", toolTipHTML: kafkaHTML},

    {key: "Apache Zookeeper", desc: "Apache Zookeeper", group:"Kafka", color: "WhiteSmoke", isGroup: true, category: "grid", img: "assets/img/gen/gen-cluster-group.svg", toolTipHTML: kafkaHTML},
    {key: "Configuration", desc: "Configuration", group:"Apache Zookeeper", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: consumerHTML},
    {key: "Group Membership", desc: "Group Membership", group:"Apache Zookeeper", img: "assets/img/gen/gen-broker.svg", category: "picTemplate", toolTipHTML: consumerHTML},
    {key: "Health Status", desc: "Health Status", group:"Apache Zookeeper", img: "assets/img/gen/gen-dashboard.svg", category: "picTemplate", toolTipHTML: consumerHTML},


    {key: "Kafka Cluster", desc: "Kafka Cluster", group:"Kafka", color: "WhiteSmoke", isGroup: true, category: "grid", img: "assets/img/gen/gen-cluster-group.svg", toolTipHTML: kafkaHTML},
    {key: "Broker", desc: "Broker", group:"Kafka Cluster", color: "WhiteSmoke", isGroup: true, category: "grid", img: "assets/img/gen/gen-broker.svg", toolTipHTML: brokerHTML},
    {key: "Topic", desc: "Topic", group:"Broker", color: "WhiteSmoke", isGroup: true, category: "grid", img: "assets/img/gen/gen-topic.svg", toolTipHTML: topicHTML},
    {key: "Partition0", desc: "Partition0", group:"Topic", color: "WhiteSmoke", isGroup: true, category: "grid-congested", img: "assets/img/gen/gen-topic.svg", toolTipHTML: partitionHTML},
    {key: "Event1", desc: "Event1", group:"Partition0", img: "assets/img/gen/gen-message.svg", category: "picTemplate", toolTipHTML: messageHTML},
    {key: "Event2", desc: "Event2", group:"Partition0", img: "assets/img/gen/gen-message.svg", category: "picTemplate", toolTipHTML: messageHTML},
    {key: "Event3", desc: "Event3", group:"Partition0", img: "assets/img/gen/gen-message.svg", category: "picTemplate", toolTipHTML: messageHTML},

    {key: "Consumer", desc: "Consumer", color: "WhiteSmoke", group:"Messaging System", isGroup: true, category: "grid", img: "assets/img/gen/gen-client.svg", toolTipHTML: consumerHTML},
    {key: "Consumer Network Client", desc: "Consumer Network Client", group:"Consumer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: partitionerHTML},
    {key: "Fetcher", desc: "Fetcher", group:"Consumer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: partitionerHTML},
    {key: "Consume", desc: "Consume", group:"Consumer", img: "assets/img/gen/gen-code.svg", category: "picTemplate", toolTipHTML: consumeHTML},

    {key: "Properties", desc: "Properties", group:"Consumer", img: "assets/img/gen/gen-notebook.svg", category: "picTemplate", toolTipHTML: cpropertiesHTML},
    {key: "Metadata", desc: "Metadata", group:"Consumer", img: "assets/img/gen/gen-document.svg", category: "picTemplate", toolTipHTML: cmetadataHTML},
    {key: "Subscription State", desc: "Subscription State", group:"Consumer", img: "assets/img/gen/gen-document.svg", category: "picTemplate", toolTipHTML: metadataHTML},
    {key: "Consumer coordinator", desc: "Consumer coordinator", group:"Consumer", img: "assets/img/gen/gen-document.svg", category: "picTemplate", toolTipHTML: metadataHTML},


];
let kafkaLinkDataArray = [
    {key: "producerToBroker", from: "Producer", to: "Broker", category: "byDirLink"},
    {key: "prToSerialzers", from: "Producer Record", to: "Serializers", category: "simplelink"},
    {key: "sToPartitioner", from: "Serializers", to: "Partitioner", category: "simplelink"},
    {key: "pToRA", from: "Partitioner", to: "Record Accumulator", category: "simplelink"},
    {key: "kafkaToConsumper", from: "Kafka", to: "Consumer", category: "simplelink"},
    {key: "azTokc", from: "Apache Zookeeper", to: "Kafka Cluster", category: "simplelink"},
    {key: "cncToFetcher", from: "Consumer Network Client", to: "Fetcher", category: "simplelink"},
    {key: "fetcherToConsume", from: "Fetcher", to: "Consume", category: "simplelink"}
];